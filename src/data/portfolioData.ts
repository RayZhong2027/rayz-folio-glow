/**
 * Central content file for Ray Zhong's portfolio.
 * Edit text, add projects, update links or swap the photo here.
 */

export const profile = {
  name: "Ray Zhong",
  initials: "RZ",
  title: "Sustainable Energy Systems & Environmental Data Analyst",
  intro:
    "I work at the intersection of energy systems, sustainability analytics, and applied AI — building models that make power generation, materials, and supply chains measurably cleaner. My work spans solar forecasting with deep learning, life-cycle and circular-economy modeling, and agentic AI pipelines for corporate sustainability disclosures.",
  location: "Ann Arbor, Michigan",
  /** Swap this for a real photo: put a file in src/assets and import it here. */
  photoUrl: "" as string,
  resumeUrl: "/Ray_Zhong_Resume.pdf",
  email: "rayzhong@umich.edu",
  altEmail: "ray3yu2he@gmail.com",
  phone: "(+1) 734-369-0387",
  linkedin: "https://linkedin.com/in/ray-zhong-480414358",
  github: "https://github.com/",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const aboutCards = [
  {
    kicker: "Now",
    title: "Sustainability Intern, Micron Technology",
    body: "Automating supplier sustainability disclosure processing with multi-agent AI workflows inside Global EHSS.",
    span: "lg:col-span-3",
  },
  {
    kicker: "Research",
    title: "Graduate Researcher, National Laboratory of the Rockies",
    body: "Stochastic cost and carbon modeling for end-of-life photovoltaic modules, feeding NREL predictive energy models.",
    span: "lg:col-span-3",
  },
  {
    kicker: "Graduate",
    title: "University of Michigan",
    body: "MS Environment and Sustainability — Sustainable Energy Systems track, Ann Arbor.",
    span: "lg:col-span-2",
  },
  {
    kicker: "Undergraduate",
    title: "Duke University & Duke Kunshan",
    body: "BS Environmental Science, Biogeochemistry track, dual-degree across Durham and Kunshan.",
    span: "lg:col-span-2",
  },
  {
    kicker: "Focus",
    title: "Energy markets, LCA & decarbonization",
    body: "Power market optimization, industrial ecology, circular economy and machine learning for climate science.",
    span: "lg:col-span-2",
  },
];

export const education = [
  {
    school: "University of Michigan, Ann Arbor",
    degree: "Master of Science in Environment and Sustainability",
    track: "Sustainable Energy Systems Track",
    period: "Aug 2025 – May 2027",
    location: "Ann Arbor, MI",
    coursework: [
      "Power Systems Market and Optimization",
      "Machine Learning in Climate Science",
      "Industrial Ecology",
    ],
  },
  {
    school: "Duke University & Duke Kunshan University",
    degree: "Bachelor of Science in Environmental Science",
    track: "Biogeochemistry Track · Dual Degree Program",
    period: "Aug 2021 – May 2025",
    location: "Durham, US · Kunshan, China",
    coursework: [
      "Biogeochemistry",
      "Introduction to GIS",
      "Sustainable Investments",
      "Introduction to LCA",
      "Energy and Environment",
    ],
  },
];

export const experience = [
  {
    company: "Micron Technology",
    role: "Global EHSS, Sustainability Intern",
    period: "May 2026 – Present",
    location: "Boise, ID",
    points: [
      "Developed an end-to-end agentic AI automation pipeline in Microsoft Copilot Studio to autonomously ingest sustainability reports, structuring ~12,000 data records at 97.2% extraction accuracy.",
      "Built a multi-agent workflow with automated validation, duplicate detection, exception handling and dashboard visualization, turning unstructured supplier disclosures into analytics-ready insights for procurement.",
    ],
    tags: ["Agentic AI", "Copilot Studio", "Data Pipelines", "Supplier ESG"],
  },
  {
    company: "National Laboratory of the Rockies (former NREL)",
    role: "Graduate Researcher",
    period: "Jan 2026 – Present",
    location: "Ann Arbor, MI",
    points: [
      "Engineered stochastic input parameters from ~600 empirical datasets on municipal landfill costs and constraints for end-of-life PV modules, integrating them into NREL predictive energy models.",
      "Quantified environmental impacts of PV disposal treatments and calculated carbon footprints to validate circular economy frameworks and support stakeholder policy decisions.",
    ],
    tags: ["Circular Economy", "Carbon Footprint", "Stochastic Modeling", "Policy Analysis"],
  },
  {
    company: "Initiative for Sustainable Investment",
    role: "Assistant Intern",
    period: "Apr 2024 – Jan 2025",
    location: "Kunshan, China",
    points: [
      "Compiled 25 structured inventories of eco-friendly technologies adopted by ~75 electronic information manufacturing enterprises to support low-carbon manufacturing transitions.",
      "Analyzed ESG and supply chain reports from ~200 renewable energy enterprises using a self-designed quantitative framework assessing Scope 1 & 2 emissions.",
    ],
    tags: ["ESG Research", "Scope 1 & 2", "Supply Chain", "Low-Carbon Manufacturing"],
  },
  {
    company: "CECEP Hundred Technical Service (Beijing) Co, Ltd",
    role: "Analyst Intern, Green Consulting (ESG)",
    period: "Jun 2023 – Aug 2023",
    location: "Beijing, China",
    points: [
      "Built carbon abatement and cost-benefit financial models in Excel and R across ~3,000 energy industry green-loan cases, contributing to Q2 2023 ESG impact reporting.",
      "Synthesized green and transition finance policy into concise regulatory briefings and visualized outcomes for portfolio-level assessment.",
    ],
    tags: ["Green Finance", "R", "Cost-Benefit Modeling", "Regulatory Briefings"],
  },
];

export const projects = [
  {
    title: "Solar Power Generation Forecasting with CNN-LSTM",
    role: "Research Project · University of Michigan",
    period: "Aug 2025 – Dec 2025",
    summary:
      "A hybrid CNN-LSTM forecasting model for two utility power plants, trained on ~200k high-resolution weather records with full preprocessing and time-series modeling.",
    method:
      "Method: sequence modeling with residual diagnostics and validation-loss analysis of generalization and overfitting.",
    metrics: [
      { value: "0.94", label: "Pearson correlation" },
      { value: "0.89", label: "R² score" },
      { value: "78%", label: "Curve match rate" },
    ],
    tags: ["Python", "TensorFlow", "CNN-LSTM", "Time Series"],
    link: "",
  },
  {
    title: "Land-Use Change & Urban Heat Island Resilience",
    role: "Undergraduate Thesis · Duke Kunshan University",
    period: "Nov 2024 – Mar 2025",
    summary:
      "Twenty years of Landsat imagery processed in QGIS with the InVEST model and a convolutional LSTM to evaluate land-use transformation against urban heat island effects across 928 km².",
    method:
      "Method: developed a Patch Cohesion Index and ran multiple linear regressions in R linking infrastructure expansion and land-cover fragmentation to heat outcomes.",
    metrics: [
      { value: "928 km²", label: "Study area" },
      { value: "20 yrs", label: "Landsat record" },
      { value: "PCI", label: "Custom index" },
    ],
    tags: ["QGIS", "InVEST", "Landsat", "R", "ConvLSTM"],
    link: "",
  },
  {
    title: "Agentic AI Automation for Sustainability Disclosures",
    role: "Applied Project · Micron Technology",
    period: "2026",
    summary:
      "End-to-end multi-agent pipeline that ingests supplier sustainability reports and produces validated, analytics-ready disclosure data for procurement teams.",
    method:
      "Method: agent orchestration in Copilot Studio with automated validation, duplicate detection, exception handling and dashboard delivery.",
    metrics: [
      { value: "~12k", label: "Records structured" },
      { value: "97.2%", label: "Extraction accuracy" },
      { value: "End-to-end", label: "Automation" },
    ],
    tags: ["Copilot Studio", "Multi-Agent", "Data Validation", "Dashboards"],
    link: "",
  },
  {
    title: "EOL Photovoltaic Landfill Cost & Carbon Modeling",
    role: "Research · National Laboratory of the Rockies / NREL",
    period: "2026",
    summary:
      "Stochastic cost and emissions model for end-of-life PV module disposal, built to validate circular economy pathways within national predictive energy models.",
    method:
      "Method: distribution fitting over empirical landfill cost data plus comparative carbon footprint accounting of disposal treatments.",
    metrics: [
      { value: "~600", label: "Datasets processed" },
      { value: "LCA", label: "Impact accounting" },
      { value: "Policy", label: "Decision support" },
    ],
    tags: ["Python", "Monte Carlo", "LCA", "Circular Economy"],
    link: "",
  },
];

export const skills = [
  {
    category: "Data & Analytics",
    items: ["Python", "R", "SQL (MySQL)", "Pandas", "Time-Series Analysis", "Regression Modeling"],
  },
  {
    category: "Energy & Sustainability",
    items: [
      "Life Cycle Assessment",
      "OpenLCA",
      "SimaPro",
      "Carbon Accounting",
      "Scope 1 & 2 Emissions",
      "Circular Economy",
    ],
  },
  {
    category: "Optimization & Modeling",
    items: [
      "Power Market Optimization",
      "Stochastic Modeling",
      "Monte Carlo Simulation",
      "Matlab",
      "Simulink",
      "InVEST",
    ],
  },
  {
    category: "Programming & Tools",
    items: ["Machine Learning", "CNN-LSTM", "QGIS", "Copilot Studio", "Git", "Microsoft Office"],
  },
];
