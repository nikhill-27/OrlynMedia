import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

interface HeroVisual3DProps {
  className?: string;
}

export const HeroVisual3D: React.FC<HeroVisual3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const { isDark } = useTheme();

  // Dynamic palette updates when theme switches
  useEffect(() => {
    if (!materialRef.current) return;
    const mat = materialRef.current;
    if (isDark) {
      mat.uniforms.uDeepColor.value.set('#0A0813');
      mat.uniforms.uBodyColor.value.set('#191428');
      mat.uniforms.uSheenColor.value.set('#6F54B0');
      mat.uniforms.uVioletRim.value.set('#9F7CF7');
      mat.uniforms.uLavenderPeak.value.set('#CBB4FC');
    } else {
      // High-Contrast Light Mode: gleaming obsidian/mercury liquid with electric violet edge
      mat.uniforms.uDeepColor.value.set('#12101E');
      mat.uniforms.uBodyColor.value.set('#27203E');
      mat.uniforms.uSheenColor.value.set('#7C3AED');
      mat.uniforms.uVioletRim.value.set('#6366F1');
      mat.uniforms.uLavenderPeak.value.set('#FFFFFF');
    }
  }, [isDark]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 700;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.8);

    // 2. WebGL Renderer with High Precision & Tone Mapping
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 3. Custom High-Poly Organic Liquid Sphere Geometry
    // High subdivision for buttery smooth waves and creases
    const sphereRadius = 3.9;
    const geometry = new THREE.SphereGeometry(sphereRadius, 180, 140);

    // 4. Custom Shader Material simulating velvet dark obsidian liquid with soft violet crest sheen
    const customMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2(width, height) },
        uDeepColor: { value: new THREE.Color('#0A0813') },      // Deep midnight indigo
        uBodyColor: { value: new THREE.Color('#191428') },      // Dark velvet violet body
        uSheenColor: { value: new THREE.Color('#6F54B0') },     // Mid-tone velvet sheen
        uVioletRim: { value: new THREE.Color('#9F7CF7') },      // Radiant electric violet rim
        uLavenderPeak: { value: new THREE.Color('#CBB4FC') },   // Soft pale lavender specular crest
      },
      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec3 vWorldPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        varying float vDisplacement;
        varying vec3 vViewDir;

        // Simplex-inspired organic sinusoidal displacement layers
        float getLiquidDisplacement(vec3 p, float t) {
          // Broad rolling liquid dunes
          float d1 = sin(p.x * 0.75 + t * 0.45) * cos(p.z * 0.65 + t * 0.35) * 0.42;
          // Diagonal flowing silky folds
          float d2 = sin(p.y * 1.1 + p.x * 0.85 + t * 0.6) * 0.28;
          // Secondary harmonic ripple
          float d3 = cos(p.x * 1.6 - p.y * 1.2 + t * 0.5) * sin(p.z * 1.2 + t * 0.3) * 0.16;
          // Subtle tertiary crest detail
          float d4 = sin(p.x * 2.8 + p.y * 2.2 + t * 0.8) * 0.06;
          
          // Organic mouse interactivity ripple
          float distToMouse = length(p.xy - vec2(uMouse.x * 2.5, uMouse.y * 2.0));
          float mousePerturb = sin(distToMouse * 3.2 - t * 2.5) * exp(-distToMouse * 0.7) * 0.22;

          return d1 + d2 + d3 + d4 + mousePerturb;
        }

        void main() {
          vUv = uv;
          
          // Apply time-based wave deformation
          float displacement = getLiquidDisplacement(position, uTime);
          vDisplacement = displacement;

          // Push vertices along normal to create organic fluid surface
          vec3 newPosition = position + normal * displacement;

          vec4 worldPos = modelMatrix * vec4(newPosition, 1.0);
          vWorldPosition = worldPos.xyz;
          vViewDir = normalize(cameraPosition - vWorldPosition);
          vNormal = normalize(normalMatrix * normal);

          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uDeepColor;
        uniform vec3 uBodyColor;
        uniform vec3 uSheenColor;
        uniform vec3 uVioletRim;
        uniform vec3 uLavenderPeak;

        varying vec3 vWorldPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        varying float vDisplacement;
        varying vec3 vViewDir;

        void main() {
          // Compute screen-space surface normal for 100% mathematically continuous, seamless lighting
          vec3 fdx = dFdx(vWorldPosition);
          vec3 fdy = dFdy(vWorldPosition);
          vec3 N = normalize(cross(fdx, fdy));

          // Ensure normal points towards viewer
          vec3 V = normalize(vViewDir);
          if (dot(N, V) < 0.0) {
            N = -N;
          }

          // 1. Key Light: positioned above and behind the crest to create top-edge illumination
          vec3 keyLightDir = normalize(vec3(0.15, 1.4, 0.7));
          float NdotL = max(dot(N, keyLightDir), 0.0);

          // 2. Dramatic Fresnel Rim lighting (grazing angles get luminous violet sheen)
          float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.7);

          // 3. Top Crest Grazing Factor (accentuates the top contour facing up & camera)
          float upwardFactor = smoothstep(-0.2, 0.9, N.y);
          float crestHighlight = pow(max(dot(N, vec3(0.0, 1.0, 0.4)), 0.0), 3.5);

          // 4. Silky Velvet Specular (Blinn-Phong with soft anisotropic falloff)
          vec3 H = normalize(keyLightDir + V);
          float spec1 = pow(max(dot(N, H), 0.0), 28.0) * 0.9;
          float spec2 = pow(max(dot(N, H), 0.0), 8.0) * 0.35; // broad satin sheen

          // Secondary rim light from upper left
          vec3 rimLightDir = normalize(vec3(-1.0, 0.8, -0.5));
          float rimDot = pow(max(dot(N, rimLightDir), 0.0), 4.0) * 0.5;

          // 5. Compose Color Layers
          // Base blend between deep shadows and dark purple body
          vec3 color = mix(uDeepColor, uBodyColor, NdotL * 0.65 + 0.35);

          // Add mid-tone velvet sheen in the crests and folds
          color = mix(color, uSheenColor, crestHighlight * 0.65 + vDisplacement * 0.25);

          // Add radiant violet rim at grazing angles (the signature look in the screenshot)
          color += uVioletRim * fresnel * 1.35;

          // Add crisp lavender highlight along the crest peaks and specular reflections
          color += uLavenderPeak * (spec1 + rimDot * 0.6) * upwardFactor * 1.1;
          color += uSheenColor * spec2 * 0.5;

          // Subtle ambient occlusion in deep folds
          float ao = smoothstep(-0.6, 0.5, vDisplacement);
          color *= (0.75 + ao * 0.25);

          gl_FragColor = vec4(color, 1.0);
        }
      `,
      transparent: true,
    });
    materialRef.current = customMaterial;

    if (!isDark) {
      customMaterial.uniforms.uDeepColor.value.set('#12101E');
      customMaterial.uniforms.uBodyColor.value.set('#27203E');
      customMaterial.uniforms.uSheenColor.value.set('#7C3AED');
      customMaterial.uniforms.uVioletRim.value.set('#6366F1');
      customMaterial.uniforms.uLavenderPeak.value.set('#FFFFFF');
    }

    const liquidMesh = new THREE.Mesh(geometry, customMaterial);
    // Position sphere so its top crest occupies the bottom ~55% of the viewport, matching screenshot
    liquidMesh.position.set(0, -3.1, 0);
    scene.add(liquidMesh);

    // 5. Mouse Interaction Tracking with Smooth Physics Damping
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x;
      targetMouseY = y;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        targetMouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        targetMouseY = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // 6. Responsive Resize Observer
    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      customMaterial.uniforms.uResolution.value.set(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 7. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Update shader uniforms
      customMaterial.uniforms.uTime.value = elapsedTime;
      customMaterial.uniforms.uMouse.value.set(mouseX, mouseY);

      // Subtle mesh tilt & gentle slow rotation responding to cursor
      liquidMesh.rotation.y = elapsedTime * 0.08 + mouseX * 0.25;
      liquidMesh.rotation.x = -0.05 + mouseY * 0.15;
      liquidMesh.rotation.z = Math.sin(elapsedTime * 0.2) * 0.04 - mouseX * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.dispose();
        if (container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
        }
      }
      geometry.dispose();
      customMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full pointer-events-none select-none overflow-hidden ${className}`}
      style={{ touchAction: 'none' }}
    />
  );
};
