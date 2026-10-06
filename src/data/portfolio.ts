// src/data/portfolio.ts
// Central data store — edit this file to update your portfolio

export const PERSONAL = {
  name: 'Rahul Raj Jaiswal',
  shortName: 'RRJ',
  tagline: 'Machine Learning Developer | Full Stack Developer',
  email: 'yashckp@gmail.com',
  github: 'https://github.com/Rahul130405',
  linkedin: 'https://www.linkedin.com/in/rahulrajjaiswal/',
  leetcode: 'https://leetcode.com/u/SShItZbD7e/',
  location: 'Chandigarh, India 🇮🇳',
  available: true,
  bio: [
    "I'm a Computer Science undergraduate specializing in Machine Learning and Full Stack Development. I build intelligent AI systems, computer vision models, and scalable backends with a first-principles engineering mindset.",
    "From training hierarchical Swin Transformers for automated pneumonia diagnosis to shipping production-ready features as part of the Core Team at StartIQOS AI, I focus on turning complex technical challenges into robust, production-ready software.",
  ],
}

export const EDUCATION = [
  {
    institution: 'Chandigarh University',
    degree: 'B.E. Computer Science & Engineering',
    period: '2024 – 2028',
    desc: 'Focus on AI, DSA, and Full Stack development.',
  },
  {
    institution: 'Kendriya Vidyalaya',
    degree: 'Class XII (CBSE)',
    period: '2023',
    desc: 'Mainstream Sciences (Physics, Chemistry, Mathematics).',
  },
  {
    institution: 'Kendriya Vidyalaya',
    degree: 'Class X (CBSE)',
    period: '2021',
    desc: 'Secondary School Education.',
  },
]

export type Certification = {
  name: string
  issuer: string
  period?: string
  link?: string
}

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Python for Data Science, AI & Development',
    issuer: 'IBM (Coursera)',
    period: 'Sep 2024',
    link: 'https://drive.google.com/file/d/1jaLT7d__IQ8z1v9dEL0ayrFCY3MRxIN6/view?usp=sharing',
  },
  {
    name: 'Python Data Analytics',
    issuer: 'Meta (Coursera)',
    period: 'Sep 2025',
    link: 'https://drive.google.com/file/d/1s4BvrKhH8oW4NELMQz4FO99dxoJr0hQS/view?usp=sharing',
  },
  {
    name: 'Gen AI & Prompt Engineering',
    issuer: 'CU',
    period: 'Dec 2025',
    link: 'https://drive.google.com/file/d/113dP3VPVFT227As8EMxWcnfouKSQkz_u/view?usp=sharing',
  },
  {
    name: 'Solutions Architecture',
    issuer: 'Forage',
    period: 'Jan 2026',
    link: 'https://drive.google.com/file/d/1R6qlandpkpf23Me14V-NHJZoMXiBora3/view?usp=sharing',
  },
  {
    name: 'DevOps, Cloud, & Agile Foundations',
    issuer: 'IBM',
    link: 'https://drive.google.com/file/d/1X3vkwqIWIYBXOem87k8w1RIKTJ6k8BTw/view?usp=sharing',
  },
  {
    name: 'AI Agents and Agentic AI in Python',
    issuer: 'Vanderbilt University',
    link: 'https://drive.google.com/file/d/18QL9_-IsRLBKOGPXihGjKiRgrTh3o-j3/view?usp=sharing',
  },
  {
    name: 'Research Paper Presentation',
    issuer: 'I2ITCON 2026',
    period: 'Jul 2026',
    link: 'https://drive.google.com/file/d/1mKXQ0OzG7nmhpzVZ2wAmfc5LKlfULUQv/view?usp=sharing',
  },
]

export const TYPING_PHRASES = [
  'Machine Learning Developer',
  'Full Stack Developer',
  'Building AI Systems',
  'Software Engineer — Core Team',
  'Production-Ready Software',
]

export const STATS = [
  { num: '7+', label: 'Projects' },
  { num: '2×', label: 'Awards' },
  { num: '∞', label: 'Curiosity' },
]

export const SKILLS = [
  {
    title: 'Languages',
    color: 'purple',
    icon: '💻',
    badges: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend',
    color: 'blue',
    icon: '🎨',
    badges: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    color: 'teal',
    icon: '⚙️',
    badges: ['Node.js', 'Django', 'REST APIs', 'FastAPI'],
  },
  {
    title: 'Databases',
    color: 'teal',
    icon: '🗄️',
    badges: ['MongoDB', 'SQL'],
  },
  {
    title: 'ML / AI',
    color: 'blue',
    icon: '🤖',
    badges: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'OpenCV',
      'Deep Learning',
      'Transformers',
      'NLP (TF-IDF)',
    ],
  },
  {
    title: 'Tools',
    color: 'red',
    icon: '🛠️',
    badges: ['Git', 'Linux', 'Jupyter', 'Google Colab'],
  },
  {
    title: 'Core CS',
    color: 'purple',
    icon: '🧠',
    badges: ['DSA', 'OOP', 'DBMS', 'Computer Networks', 'Operating Systems'],
  },
  {
    title: 'Cybersecurity',
    color: 'red',
    icon: '🛡️',
    badges: ['Ethical Hacking', 'Network Security', 'Penetration Testing', 'Kali Linux'],
  },
]

export type Project = {
  id: number
  category: string
  title: string
  desc: string
  tech: string[]
  gradient: string
  emoji: string
  github?: string
  demo?: string
  paper?: string
  highlight?: string
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    category: 'AI / EdTech',
    title: 'EduBits',
    desc: 'Student learning platform integrating PYQs, quizzes, notes, and academic tools to provide centralized study resources.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI / LLM'],
    gradient: 'linear-gradient(135deg, #1e3a8a, #4338ca, #6366f1)',
    emoji: '🎓',
    demo: 'https://edubits0.vercel.app/',
    highlight: 'Academic Platform',
  },
  {
    id: 2,
    category: 'Blockchain / Security',
    title: 'ChainVote',
    desc: 'Secure voting system using blockchain-inspired architecture with AES-256 encryption and SHA-256 hashing for tamper-resistant data handling.',
    tech: ['Django', 'Python', 'Blockchain', 'Cryptography', 'AES-256', 'SHA-256'],
    gradient: 'linear-gradient(135deg, #1e1b4b, #312e81, #4338ca)',
    emoji: '🗳️',
    github: 'https://github.com/Rahul130405/ChainVote',
    demo: 'https://chainvote-rrj.vercel.app/',
    highlight: 'Tamper-Resistant',
  },
  {
    id: 3,
    category: 'Full Stack',
    title: 'Developer Portfolio',
    desc: 'Modern developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, featuring interactive UI and secure email integration.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Resend'],
    gradient: 'linear-gradient(135deg, #0f172a, #1e293b, #334155)',
    emoji: '🌐',
    github: 'https://github.com/Rahul130405/PORTFOLIO',
    demo: 'https://rrj-portfolio.vercel.app/',
    highlight: 'Interactive UI',
  },
  {
    id: 4,
    category: 'Security',
    title: 'Koot-Niti',
    desc: 'Cryptographic risk platform for detecting vulnerable primitives, security classification, quantum-readiness analysis, and migration planning.',
    tech: ['Go', 'Cryptography', 'SARIF', 'CBOM', 'Quantum Readiness', 'Risk Analysis'],
    gradient: 'linear-gradient(135deg, #1e1b4b, #312e81, #4f46e5)',
    emoji: '🔐',
    github: 'https://github.com/Rahul130405/Koot-Niti',
    demo: 'https://koot-niti.vercel.app/',
    highlight: 'Quantum Readiness',
  },
  {
    id: 5,
    category: 'Medical AI',
    title: 'SwinPneumonia-Net',
    desc: 'Swin Transformer based pneumonia classifier for chest X-ray images achieving 95.83% test accuracy, with image preprocessing, augmentation, and evaluation using F1 score and AUC.',
    tech: ['Python', 'PyTorch', 'Swin Transformer', 'Computer Vision', 'Medical AI'],
    gradient: 'linear-gradient(135deg, #312e81, #4338ca, #6366f1)',
    emoji: '🫁',
    github: 'https://github.com/Rahul130405/-SWINPNEUMONIA-NET',
    paper: 'https://drive.google.com/file/d/1mKXQ0OzG7nmhpzVZ2wAmfc5LKlfULUQv/view?usp=sharing',
    highlight: '95.83% Accuracy',
  },
  {
    id: 6,
    category: 'AI',
    title: 'InsightPDF',
    desc: 'AI-powered document assistant that allows users to upload PDF documents and ask context-aware questions using LLM-based retrieval.',
    tech: ['TypeScript', 'LLM', 'RAG', 'AI'],
    gradient: 'linear-gradient(135deg, #1e3a8a, #3b82f6, #60a5fa)',
    emoji: '📄',
    github: 'https://github.com/Rahul130405/GUI-PDF-WEB',
    highlight: 'RAG Document QA',
  },
  {
    id: 7,
    category: 'AI / Agriculture',
    title: 'JALNITI',
    desc: 'AI-powered multilingual water management assistant using DeepSeek-R1, real-time weather integration, and hydrological data visualization for sustainable agriculture.',
    tech: ['Flask', 'DeepSeek-R1', 'PyTorch', 'Whisper', 'Kokoro'],
    gradient: 'linear-gradient(135deg, #0f766e, #0d9488, #2dd4bf)',
    emoji: '💧',
    github: 'https://github.com/Rahul130405/JALNITI',
    highlight: 'DeepSeek-R1 LLM',
  },
]

export const ACHIEVEMENTS = [
  {
    year: '2025',
    title: 'LeetCode Proficiency',
    desc: 'Solved 200+ DSA problems on LeetCode, covering graphs, dynamic programming, and advanced algorithms.',
    badge: '🧠 200+ Solved',
  },
  {
    year: '2025',
    title: 'Consistent Coding Streak',
    desc: 'Maintained a 100+ day coding streak on LeetCode, demonstrating consistent problem-solving practice.',
    badge: '🔥 100+ Streak',
  },
  {
    year: '2025',
    title: 'IIT Roorkee NSS — Rank 6',
    desc: 'Secured Rank 6 at the IIT Roorkee National Social Summit among national-level participants.',
    badge: '🏅 6th National',
  },
  {
    year: '2025',
    title: 'Tekathon 4.0 Winner',
    desc: 'Winner of Tekathon 4.0, developing a real-world solution under strict time constraints.',
    badge: '🥇 Winner',
  },
]

export const EXPERIENCE = [
  {
    icon: '🧠',
    title: 'Software Engineer — Core Team',
    org: 'StartIQOS AI',
    period: 'Aug 2026 – Present',
    desc: 'Continuing as part of the Core Team, building and maintaining production-ready AI-powered product features while collaborating with founders on scalable software solutions.',
    tags: ['Software Engineering', 'AI', 'Product Development'],
  },
  {
    icon: '🧠',
    title: 'Full Stack Development Intern',
    org: 'StartIQOS AI',
    period: 'Jun 2026 – Aug 2026',
    desc: 'Developed full-stack features for an AI-powered Startup Operating System, contributing to scalable frontend and backend modules, authentication, REST APIs, and production-ready workflows.',
    tags: ['Full Stack', 'React', 'Node.js', 'TypeScript'],
  },
  {
    icon: '⛓',
    title: 'Joint Secretary',
    org: 'TokenTitan Club, Chandigarh University',
    period: '2026 – Present',
    desc: 'Promoted from Club Manager in recognition of leadership, event management, and contributions to club growth. Lead strategic initiatives and coordinate club operations.',
    tags: ['Leadership', 'Management', 'Strategy', 'Event Planning'],
  },
  {
    icon: '⛓',
    title: 'Club Manager',
    org: 'TokenTitan Club, Chandigarh University',
    period: '2025 – 2026',
    desc: 'Organized and led 10+ technical workshops, hackathons, and community events. Managed a cross-functional team and coordinated event planning, marketing, and execution.',
    tags: ['Leadership', 'Event Management', 'Marketing', 'Community'],
  },
]
