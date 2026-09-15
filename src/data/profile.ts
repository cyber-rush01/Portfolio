export const profile = {
  name: "Abhimanue Biju",
  firstName: "Abhimanue",
  lastName: "Biju",
  initials: "AB",
  role: "Cybersecurity & Data Science Engineer",
  shortRole: "BCA Graduate — Cyber & Data",
  tagline:
    "A motivated BCA graduate specializing in Cybersecurity, Digital Forensics, and Data Science. I build secure systems, analyze complex data, and engineer practical solutions.",
  statement:
    "A builder's mindset meets a defender's perspective. Academic training in programming, databases, web development, and data analysis — ready for the IT industry.",
  location: "India",
  status: "Open to work",
  email: "abhikuttan6152@gmail.com",
  phone: "+91 9567886152",
  phoneHref: "tel:+919567886152",
  linkedin: "https://in.linkedin.com/in/abhimanue-biju-a87098292",
  github: "https://github.com/cyber-rush01",
  photo: "/profile.jpg",
  badgeId: "AB-6152-CYB",
} as const;

export const aboutCopy = {
  p1: "I am a motivated and curious BCA graduate who enjoys solving problems using technology. My academic journey has given me exposure to programming, databases, web development, cybersecurity, digital forensics, and data analysis.",
  p2: "I believe in continuously learning and developing practical skills that can help me grow as an IT professional. I'm ready to take the next step into the IT industry.",
};

export const stats = [
  { label: "BCA Degree", value: 1, suffix: "", desc: "Bachelor of Computer Applications, completed." },
  { label: "Capstone Builds", value: 1, suffix: "", desc: "Academic and personal technology projects shipped." },
  { label: "Sports", value: 1, suffix: "", desc: "Competitive cycling with state-level participation." },
  { label: "Focus Areas", value: 3, suffix: "", desc: "Cybersecurity, digital forensics, and data science." },
] as const;

export const services = [
  {
    title: "Cybersecurity",
    description:
      "Defensive thinking applied to real systems — threat awareness, secure coding habits, and practical risk reduction.",
  },
  {
    title: "Data Science",
    description:
      "Turning raw tables into decisions with Python, Pandas, and clear visual analysis.",
  },
  {
    title: "Digital Forensics",
    description:
      "Evidence-minded investigation: tracing artifacts, reconstructing events, and documenting findings.",
  },
  {
    title: "Web Engineering",
    description:
      "Functional, accessible applications with HTML, CSS, Python, and Flask — built to work, not just demo.",
  },
] as const;

export const projects = [
  {
    id: "risk-profiling",
    title: "Data-Driven Risk Profiling for Finance",
    subtitle:
      "Weighted financial risk scores for customers — academic capstone with IBM ICE and NCS.",
    href: "https://github.com/cyber-rush01",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    tags: ["Python", "Flask", "Pandas", "Weighted Score"],
    features: [
      "Scores across credit, payment history, debt-to-income, and employment stability",
      "Weighted scoring system for a final risk rating",
      "Simulated customer risk calculation in a Flask web app",
    ],
    gridClass: "md:col-span-12 h-[420px]",
  },
] as const;

export const journey = [
  {
    year: "Now",
    title: "Open to IT Opportunities",
    subtitle: "India · Remote-friendly",
    description:
      "Looking for a first professional role in cybersecurity, data, or software. Ready to contribute, learn fast, and ship practical work.",
  },
  {
    year: "Capstone",
    title: "Financial Risk Profiling Platform",
    subtitle: "IBM Innovation Centre for Education · NCS",
    description:
      "Built a Flask/Python application that computes weighted financial risk scores across four factors, collaborating with IBM ICE and Nihon Communication Solutions.",
  },
  {
    year: "BCA",
    title: "Bachelor of Computer Applications",
    subtitle: "YIASCM, Yenepoya Institute · Mangaluru",
    description:
      "Triple specialization in Cyber Security, Digital Forensics, and Data Science. Coursework in programming, databases, networking, and web development.",
  },
  {
    year: "Sports",
    title: "Competitive Cycling",
    subtitle: "State-level participation",
    description:
      "Active in competitive cycling with state recognition — discipline, endurance, and showing up when it counts.",
  },
] as const;

export const education = [
  {
    degree: "Bachelor of Computer Applications",
    school: "Yenepoya Institute of Arts, Science, Commerce & Management (YIASCM), Mangaluru",
    year: "Completed",
    badge: "Triple Major",
    details: [
      "Specialization: Cyber Security, Digital Forensic & Data Science",
      "Programming, database management, and web development",
      "Data analysis, networking, and applied security fundamentals",
      "Capstone with IBM Innovation Centre for Education and NCS",
    ],
  },
] as const;

export const technicalSkills = [
  { name: "Python", level: 86 },
  { name: "SQL", level: 80 },
  { name: "HTML & CSS", level: 84 },
  { name: "Pandas", level: 78 },
  { name: "Matplotlib", level: 74 },
  { name: "Flask", level: 72 },
] as const;

export const tools = ["Jupyter Notebook", "VS Code", "GitHub", "Git"] as const;

export const traits = [
  "Problem Solving",
  "Continuous Learning",
  "Cybersecurity",
  "Digital Forensics",
  "Data Science",
  "Web Development",
  "Database Management",
] as const;

export const techMarquee = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
  { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
] as const;

export const academicCerts = [
  {
    id: "bca",
    title: "Bachelor of Computer Applications",
    issuer: "Yenepoya Institute (YIASCM), Mangaluru",
    meta: "Degree · Completed",
    summary:
      "Triple specialization in Cyber Security, Digital Forensics, and Data Science.",
  },
  {
    id: "ibm-capstone",
    title: "Data-Driven Risk Profiling for Finance",
    issuer: "IBM Innovation Centre for Education · NCS",
    meta: "Capstone project",
    summary:
      "Flask/Python application computing weighted customer risk scores across four financial factors.",
  },
  {
    id: "workshops",
    title: "Technical Workshops & Coding Contests",
    issuer: "Academic programmes",
    meta: "Workshops · Contests",
    summary:
      "Coursera coursework, coding contests, and technical workshops backing the core skill set.",
  },
] as const;

export const interestCerts = [
  {
    id: "cycling",
    title: "Competitive Cycling",
    issuer: "Sports participation",
    meta: "Athletics",
    summary: "Active participation in competitive cycling events.",
  },
  {
    id: "state",
    title: "State-Level Recognition",
    issuer: "State sports bodies",
    meta: "Certificate",
    summary: "Received state-level participation certificates.",
  },
] as const;

export const morphingTexts = [
  "Cybersecurity",
  "Data Science",
  "Digital Forensics",
  "Python Engineering",
  "Abhimanue Biju",
];
