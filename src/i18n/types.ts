export type Locale = 'en' | 'de' | 'fr';

export interface LocaleInfo {
  code: Locale;
  label: string;
  nativeName: string;
  flag: string;
}

export interface TranslationDictionary {
  nav: {
    work: string;
    services: string;
    industries: string;
    process: string;
    testimonials: string;
    contact: string;
    startProject: string;
    menu: string;
    tagline: string;
  };
  hero: {
    eyebrow: string;
    axiomLabel: string;
    headlines: {
      main: string;
      accent: string;
      sub: string;
    }[];
    startProjectBtn: string;
    seeWorkBtn: string;
    agencyReelBtn: string;
    stats: {
      delivered: { value: string; label: string; sub: string };
      retention: { value: string; label: string; sub: string };
      turnaround: { value: string; label: string; sub: string };
    };
    floatingCards: {
      renderTitle: string;
      renderDesc: string;
      retentionTitle: string;
      retentionDesc: string;
    };
  };
  trusted: {
    label: string;
  };
  services: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    crossSellBadge: string;
    webTitle: string;
    webBadge: string;
    webTagline: string;
    webDesc: string;
    webCapabilities: string[];
    webDeliverables: string[];
    videoTitle: string;
    videoBadge: string;
    videoTagline: string;
    videoDesc: string;
    videoCapabilities: string[];
    videoDeliverables: string[];
    capabilitiesHeading: string;
    deliverablesHeading: string;
    selectServiceBtn: string;
    retentionStatLabel: string;
    satisfactionStatLabel: string;
  };
  niches: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ecommerce: {
      title: string;
      subTitle: string;
      desc: string;
      metric: string;
      metricDesc: string;
      deliverables: string[];
      caseHighlight: string;
    };
    realEstate: {
      title: string;
      subTitle: string;
      desc: string;
      metric: string;
      metricDesc: string;
      deliverables: string[];
      caseHighlight: string;
    };
    healthcare: {
      title: string;
      subTitle: string;
      desc: string;
      metric: string;
      metricDesc: string;
      deliverables: string[];
      caseHighlight: string;
    };
    exploreSectorBtn: string;
  };
  process: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    steps: {
      step: string;
      title: string;
      duration: string;
      description: string;
      activities: string[];
      output: string;
    }[];
    phaseLabel: string;
    activitiesLabel: string;
    keyDeliverableLabel: string;
    startSprintBtn: string;
  };
  portfolio: {
    badge: string;
    title: string;
    titleAccent: string;
    categories: {
      all: string;
      design: string;
      development: string;
      video: string;
    };
    galleryLabel: string;
    inspectHint: string;
    inspectCta: string;
    filmReelBadge: string;
    theChallenge: string;
    theSolution: string;
    deliverablesLabel: string;
    engineeredWith: string;
    playReelBtn: string;
    liveWalkthroughBtn: string;
    inquireScopeBtn: string;
  };
  testimonials: {
    badge: string;
    title: string;
    titleAccent: string;
    clutchRating: string;
    verifiedLabel: string;
    analyticsVerified: string;
  };
  cta: {
    tagline: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    estimatorTitle: string;
    bothDiscipline: string;
    webDiscipline: string;
    videoDiscipline: string;
    sprintDuration: string;
    intakeOpen: string;
    startProjectBtn: string;
    partnerContact: string;
    ndaProtected: string;
    fastResponse: string;
  };
  footer: {
    description: string;
    availability: string;
    navTitle: string;
    nichesTitle: string;
    desksTitle: string;
    locations: string;
    bookCall: string;
    rights: string;
    tagline: string;
  };
  modal: {
    badge: string;
    title: string;
    subtitle: string;
    step1Label: string;
    step2Label: string;
    step3Label: string;
    step4Label: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    contextLabel: string;
    contextPlaceholder: string;
    submitBtn: string;
    ndaNotice: string;
    responseNotice: string;
    confirmTitle: string;
    confirmSubtitle: string;
    summaryHeading: string;
    disciplinesLabel: string;
    industryLabel: string;
    timelineLabel: string;
    returnBtn: string;
  };
  videoModal: {
    badge: string;
    masterTitle: string;
    colorGrade: string;
    resultLabel: string;
  };
}
