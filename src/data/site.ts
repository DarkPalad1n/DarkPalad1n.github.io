// ─────────────────────────────────────────────────────────────
//  All personal content of the site lives in this file.
//  Edit the values below; the pages update automatically.
//  Everything marked TODO is a placeholder waiting for your input.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Pascal Seitz',
  handle: 'pascal', // used in the terminal prompt: pascal@brown:~$
  host: 'brown',
  role: 'Computer Science M.Sc.',
  affiliation: 'Brown University',
  location: 'Providence, RI',
  // Shown as a pulsing status badge on the home page. Set to '' to hide.
  status: '',
  // Shown as mission.txt in the terminal on the home page (and as the default meta description).
  tagline:
    'I am passionate about discovering how machines learn from the world, and about turning these insights into research with a positive, long-lasting impact.',
  // Home page "about" card. Links use [text](url).
  about: [
    "I am a first-year master's student in Computer Science at Brown University, where I contribute to research in the [GalilAI Group](https://galilai-group.github.io/). Before Brown, I completed my B.Sc. in Information Systems at Aalen University of Applied Sciences and worked with [Prof. Dr. Andreas Theissler](https://ml-and-vis.org/) on explainable anomaly detection, building on my industry research with Bosch.",
  ],
  // Square-ish photo in /public. Set to '' to show initials instead.
  photo: '/portrait.jpg',
  photoSize: { width: 663, height: 884 },
  photoPosition: '50% 20%', // which part of the photo stays visible when cropped
  links: {
    github: 'https://github.com/DarkPalad1n',
    linkedin: 'https://www.linkedin.com/in/pascalseitz',
    scholar: '', // optional: Google Scholar URL
    email: 'pascal_seitz@brown.edu',
  },
  // Blog on/off. When false, it is hidden everywhere (nav, home, footer, RSS, sitemap)
  // and no blog pages are built. Posts stay in src/content/blog/.
  blog: false,
  // One-page resume (PDF). The /cv page is the full, longer CV.
  resumePdf: '/resume.pdf',
};

// ── Research ────────────────────────────────────────────────
// "Current focus" = depth. "Broader interests" = curiosity.
// Framing it this way reads as intentional, not undecided.
export const research = {
  // Research interests card on /research. Links use [text](url).
  focus: {
    text: [
      'My research so far has focused on time-series anomaly detection and explainable AI. Recently, I have become particularly interested in self-supervised learning and world models.',
    ],
  },
  interests: [
    'Deep learning',
    'Time-series anomaly detection',
    'Explainable AI',
    'Self-supervised representation learning',
  ],
};

export type Publication = {
  title: string;
  authors: string; // mark yourself with ** **, e.g. 'A. Smith, **P. Seitz**'
  venue: string;
  year: number;
  note?: string; // e.g. language or a one-line English summary
  links?: { label: string; url: string }[];
};

export const publications: Publication[] = [
  {
    title:
      'Smarte HeizungsANlaGenOptimierung – SHANGO: Felddatenanalyse von Wärmepumpen zur Detektion des aktuellen Betriebsverhaltens und zur Ableitung von Lastprofilen',
    note: 'In German. Field data analysis of heat pumps for detecting current operating behavior and deriving load profiles.',
    authors: 'S.-J. Arora, A. Qarqour, **P. Seitz**, F. Weiss',
    venue: 'AUTOMATION 2024, VDI Verlag, pp. 855–868',
    year: 2024,
    links: [{ label: 'doi', url: 'https://doi.org/10.51202/9783181024379-855' }],
  },
];

// ── Projects ────────────────────────────────────────────────
export type Project = {
  name: string;
  description: string;
  tags: string[];
  url?: string; // repo or demo (only public links)
  year?: number; // start year
  ongoing?: boolean; // shows "2024 – present"
};

export const projects: Project[] = [
  {
    name: 'test-bench-data-pipeline',
    description:
      'Designed and implemented a production-ready data pipeline at Audi for automotive test-bench measurements, based on the Medallion architecture with Unity Catalog as the single source of truth. Benchmarked performance tuning cut runtime 17× and Databricks compute costs by about 42%. Also built an LSTM autoencoder for anomaly detection on the test-bench data, with Bayesian hyperparameter search.',
    tags: ['Databricks', 'Apache Spark', 'Delta Lake', 'Unity Catalog', 'TensorFlow'],
    year: 2026,
  },
  {
    name: 'cutting-assistant',
    description:
      'Extended a CNN-based computer vision model at TRUMPF with a new multiclass cut-edge detection component, improving accuracy through data rebalancing and hyperparameter optimization.',
    tags: ['Computer Vision', 'CNN', 'TensorFlow'],
    year: 2025,
  },
  {
    name: 'crm-pos-analytics',
    description:
      'Full-stack CRM for a family-run hairstyling business, combining customer management, a point-of-sale system and analytics for performance evaluation.',
    tags: ['Java', 'Spring', 'Angular', 'Full-Stack'],
    year: 2024,
    ongoing: true,
  },
  {
    name: 'load-profile-tool',
    description:
      'Led the development of an internal full-stack tool at Bosch Home Comfort Group that derives load profiles from heat pump and boiler field data. Implemented the statistics behind its histograms and probability plots in Python and harmonized legacy data sources into a new database.',
    tags: ['Python', 'Power BI', 'SQL', 'Statistics', 'Full-Stack'],
    year: 2023,
  },
];

// ── CV ──────────────────────────────────────────────────────
export type CvEntry = {
  title: string;
  org: string;
  period: string;
  place?: string;
  details?: string[];
  links?: { label: string; url: string }[];
  supervisor?: { name: string; url?: string };
  courses?: string[]; // shown as "Courses: …" on /cv
};

export const education: CvEntry[] = [
  {
    title: 'M.Sc. Computer Science',
    org: 'Brown University',
    period: 'Expected May 2028',
    place: 'Providence, RI, USA',
    details: ['Courses: Machine Learning, Self-Supervised Learning and World Models'],
  },
  {
    title: 'B.Sc. Information Systems',
    org: 'Aalen University of Applied Sciences',
    period: 'Completed Sep 2025',
    place: 'Germany',
    details: [
      'Concentrations: Applied ML and Software Engineering · GPA 3.8/4.0',
      'Courses: Data Mining and ML, Applied Deep Learning, Development of Information Systems, Software Engineering',
    ],
  },
];

export const experience: CvEntry[] = [
  {
    title: 'Data & Machine Learning Engineer Intern',
    org: 'Audi AG',
    period: 'Mar 2026 – Aug 2026',
    place: 'Neckarsulm, Germany',
    details: [
      'Built a production-ready end-to-end data pipeline in Databricks with Spark and Delta Lake — 17× faster runtime and ~42% lower DBU costs',
      'Developed an LSTM-based anomaly detection model for automotive test-bench time-series, with automated hyperparameter tuning',
    ],
  },
  {
    title: 'Data Science Intern',
    org: 'TRUMPF',
    period: 'Sep 2025 – Mar 2026',
    place: 'Ditzingen, Germany',
    details: [
      'Fine-tuned and extended a CNN-based computer vision model ("Cutting Assistant") via data rebalancing and hyperparameter optimization, adding a new cut-edge class',
      'Integrated a multiclass cut-edge detection component (edge presence, orientation, alignment, foreground/background) for more robust quality assessment',
    ],
  },
  {
    title: 'Data Science Intern',
    org: 'Bosch Home Comfort Group',
    period: 'Sep 2023 – Feb 2024',
    place: 'Wernau (Neckar), Germany',
    details: [
      'Led development of an analysis platform for heat pump performance and predictive reliability — reducing annual costs by €800,000',
      'Improved predictive maintenance models with scikit-learn, raising system efficiency by 15% and reducing Scope 2 emissions',
    ],
  },
];

export const researchExperience: CvEntry[] = [
  {
    title: 'Multimodal Dataset Infrastructure for ML Research',
    org: 'Academic research at the GalilAI Group, Brown University',
    period: 'Oct 2026 – Present',
    details: [
      'Contributing new dataset integrations to stable-datasets, the group\'s multimodal dataset library.',
      'The library supports reproducible ML research across image, video, time-series and audio data.',
    ],
    links: [{ label: 'repo', url: 'https://github.com/galilai-group/stable-datasets' }],
  },
  {
    title: 'XAI for Anomaly Detection in Time-Series Data for Operating Condition Diagnosis of Heat Pumps',
    org: 'Academic research at Aalen University of Applied Sciences',
    supervisor: { name: 'Prof. Dr. Andreas Theissler', url: 'https://ml-and-vis.org/' },
    period: 'Jun 2025 – Sep 2025',
    details: [
      'Designed, developed and trained an LSTM autoencoder with SHAP explanations to detect and interpret novel anomalies in real-world heat pump field data.',
      'Showed that faults leave distinct patterns: clogged filters were flagged days before the logged fault, and anomalies traced back to individual sensors.',
    ],
  },
  {
    title: 'Heat Pump Field Data Analysis for Operating-State Detection and Load Profiling',
    org: 'Industry research in collaboration with Bosch Home Comfort Group',
    period: 'Mar 2024 – Jul 2024',
    details: [
      'Analyzed heat pump field data following the KDD process to detect operating states and derive load profiles.',
      'Traced a 30% reduction in system flow to filter obstructions; the results were published at AUTOMATION 2024.',
    ],
    links: [{ label: 'paper', url: 'https://doi.org/10.51202/9783181024379-855' }],
  },
];

export const teaching: CvEntry[] = [
  {
    title: 'Teaching Assistant',
    org: 'Aalen University of Applied Sciences',
    period: 'Oct 2022 – Sep 2025',
    place: 'Germany',
    courses: ['Introduction to Programming', 'Advanced Programming'],
  },
];

export const leadership: CvEntry[] = [
  {
    title: 'Vice President of Education',
    org: 'JCNetwork',
    period: 'Jan 2022 – Jan 2023',
    place: 'Germany',
    details: [
      "Rebuilt the Education department of Germany's largest student consulting network (2,600+ members) after the pandemic, leading a team of twelve fellows",
    ],
  },
  {
    title: 'Vice President of the Swimming Division',
    org: 'Sport Club Korb e.V.',
    period: 'Apr 2017 – Oct 2021',
    place: 'Germany',
    details: ['Re-elected for four consecutive terms; planned practice programs and trained 14 youth athletes per season'],
  },
];

// ── Fun facts ───────────────────────────────────────────────
// Short, specific and a little surprising works best.
export const funFacts: string[] = [
  'Before training models, I trained swimmers.',
  "I'm writing a novel. Progress comes in irregular bursts, but it's coming.",
  'Japan is at the top of my travel list.',
];
