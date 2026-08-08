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
  location: 'India 🇮🇳',
  available: true,
  bio: [
    "I'm a Computer Science Engineering student with a deep passion for Artificial Intelligence, Data Structures & Algorithms, and Full Stack Development. I approach every challenge with a first-principles mindset.",
    "Whether it's building an AI-powered PDF explainer or competing in hackathons, I consistently push the limits of what's possible with code. I believe great software is invisible — it just works.",
  ],
}

export const EDUCATION = [
  {
    institution: 'Chandigarh University',
    degree: 'B.E. Computer Science Engineering',
    period: '2024 – 2028',
    desc: 'Focus on AI, DSA, and Full Stack development.',
  },
  {
    institution: 'Senior Secondary Schooling',
    degree: 'Class XII (CBSE)',
    period: '2021 – 2023',
    desc: 'Mainstream Sciences (Physics, Chemistry, Mathematics).',
  },
]

export const CERTIFICATIONS = [
  { name: 'IBM AI Engineering', issuer: 'IBM' },
  { name: 'Meta Backend Developer', issuer: 'Meta' },
  { name: 'Forage Cybersecurity Virtual Experience', issuer: 'Forage' },
  { name: 'Chandigarh University AI Workshop', issuer: 'CU' },
]

export const TYPING_PHRASES = [
  'Building AI Systems',
  'Solving Hard Problems',
  'Full Stack Developer',
  'Open Source Contributor',
  'Hackathon Champion',
]

export const STATS = [
  { num: '5+', label: 'Projects' },
  { num: '2×', label: 'Awards' },
  { num: '∞', label: 'Curiosity' },
]

export const SKILLS = [
  {
    title: 'Languages',
    color: 'purple',
    icon: '💻',
    badges: ['Python', 'C', 'C++', 'Java', 'JavaScript'],
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
      'Swin Transformer',
      'NLP (TF-IDF, Cosine Similarity)',
    ],
  },
  {
    title: 'Cybersecurity',
    color: 'red',
    icon: '🛡️',
    badges: ['Ethical Hacking', 'Network Security', 'Penetration Testing', 'Kali Linux'],
  },
  {
    title: 'Backend & DB',
    color: 'teal',
    icon: '⚙️',
    badges: ['Node.js', 'Django', 'REST APIs', 'FastAPI', 'MongoDB', 'SQL'],
  },
  {
    title: 'Tools',
    color: 'red',
    icon: '🛠️',
    badges: ['Git', 'Linux', 'Jupyter', 'Google Colab', 'Tailwind CSS'],
  },
  {
    title: 'Core CS',
    color: 'purple',
    icon: '🧠',
    badges: ['DSA', 'OOP', 'DBMS', 'Computer Networks', 'Operating Systems'],
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
  highlight?: string
}

export const PROJECTS: Project[] = [
  {
    id: 11,
    category: 'AI / EdTech',
    title: 'EduBits',
    desc: 'Intelligent platform for concise educational content generation and learning paths.',
    tech: ['Next.js', 'LLM', 'AI'],
    gradient: 'linear-gradient(135deg, #1e3a8a, #4338ca, #6366f1)',
    emoji: '🎓',
    demo: 'https://edubits0.vercel.app/',
    highlight: 'Learning Paths',
  },
  {
    id: 6,
    category: 'Blockchain',
    title: 'ChainVote',
    desc: 'A decentralized voting protocol leveraging SHA-256 blockchain chaining and AES-256 encryption to ensure secure, anonymous, and tamper-proof digital elections.',
    tech: ['Django', 'Python', 'Blockchain', 'Cryptography'],
    gradient: 'linear-gradient(135deg, #1e1b4b, #312e81, #4338ca)',
    emoji: '🗳️',
    github: 'https://github.com/Rahul130405/ChainVote',
    demo: 'https://chainvote-rrj.vercel.app/',
    highlight: 'Tamper-Proof Ledger',
  },
  {
    id: 10,
    category: 'AI / Security',
    title: 'Secret-Message-Encryptor',
    desc: 'AI-powered encryption tool featuring custom ciphers and intelligent cryptanalysis using LLMs for secure communication.',
    tech: ['Python', 'LLM', 'Cryptography'],
    gradient: 'linear-gradient(135deg, #1e3a8a, #4338ca, #6366f1)',
    emoji: '🔐',
    github: 'https://github.com/Rahul130405/Secret-Message-Encryptor',
    highlight: 'AI Cryptanalysis',
  },
  {
    id: 7,
    category: 'AI / Agriculture',
    title: 'JALNITI',
    desc: 'Intelligent multi-lingual water management assistant powered by DeepSeek-R1 for sustainable agriculture. Features local LLM processing, real-time weather integration, and dynamic hydrological data visualization.',
    tech: ['Flask', 'DeepSeek-R1', 'PyTorch', 'Whisper', 'Kokoro'],
    gradient: 'linear-gradient(135deg, #0f766e, #0d9488, #2dd4bf)',
    emoji: '💧',
    github: 'https://github.com/Rahul130405/JALNITI',
    highlight: 'DeepSeek-R1 LLM',
  },
  {
    id: 8,
    category: 'Medical AI',
    title: 'SwinPneumonia-Net',
    desc: 'High-precision chest X-ray diagnostic system utilizing Hierarchical Vision Transformers (Swin-B). Achieved 95.83% accuracy and 0.98 AUC-ROC in automated pneumonia detection.',
    tech: ['PyTorch', 'Swin Transformer', 'Computer Vision', 'Medical AI'],
    gradient: 'linear-gradient(135deg, #312e81, #4338ca, #6366f1)',
    emoji: '🫁',
    github: 'https://github.com/Rahul130405/-SWINPNEUMONIA-NET',
    highlight: '95.8% Accuracy',
  },
  {
    id: 1,
    category: 'AI',
    title: 'InsightPDF',
    desc: 'A modern web-based AI assistant that allows users to upload PDF documents and ask context-aware questions using LLMs.',
    tech: ['TypeScript', 'LLM', 'RAG', 'AI'],
    gradient: 'linear-gradient(135deg, #1e3a8a, #3b82f6, #60a5fa)',
    emoji: '📄',
    github: 'https://github.com/Rahul130405/GUI-PDF-WEB',
    highlight: 'Context-Aware AI',
  },
  {
    id: 9,
    category: 'Backend',
    title: 'Scalable RBAC API',
    desc: 'Enterprise-ready task management backend featuring JWT authentication, Bcrypt hashing, and granular Role-Based Access Control (RBAC). Built with a modular architecture for microservices scalability.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'React'],
    gradient: 'linear-gradient(135deg, #1e293b, #334155, #475569)',
    emoji: '🔑',
    github: 'https://github.com/Rahul130405/BACKEND-DEVELOPER-INTERN-PROJECT-',
    highlight: 'RBAC Security',
  },
  {
    id: 2,
    category: 'AI',
    title: 'PREACT VISION',
    desc: 'Real-time CCTV behavior threat detection system utilizing an optimized Swin-Temporal model for superior behavior recognition.',
    tech: ['Python', 'Computer Vision', 'Deep Learning'],
    gradient: 'linear-gradient(135deg, #064e3b, #059669, #10b981)',
    emoji: '👁️',
    github: 'https://github.com/Rahul130405/PREACT-VISION',
    highlight: 'Swin-Temporal Model',
  },
  {
    id: 5,
    category: 'Web',
    title: 'QuizEngine',
    desc: 'Algorithm-driven quiz platform featuring adaptive scoring, a topic dependency graph, and real-time leaderboards.',
    tech: ['JavaScript', 'Algorithms', 'Web'],
    gradient: 'linear-gradient(135deg, #1a0a2e, #7c3aed, #c026d3)',
    emoji: '⚡',
    github: 'https://github.com/Rahul130405/QUIZ-ENGINE',
    highlight: 'Adaptive Scoring',
  },
]

export const ACHIEVEMENTS = [
  {
    year: '2025',
    title: 'LeetCode Proficiency',
    desc: 'Solved 200+ DSA problems covering graphs, dynamic programming, and advanced concepts.',
    badge: '🧠 200+ Solved',
  },
  {
    year: '2025',
    title: 'Consistent Coding Streak',
    desc: 'Maintained a 100+ days coding streak, demonstrating strong consistency and discipline.',
    badge: '🔥 100+ Streak',
  },
  {
    year: '2025',
    title: 'IIT Roorkee NSS — Rank 6',
    desc: 'Secured Rank 6 at IIT Roorkee National Social Summit among national-level participants.',
    badge: '🏅 6th National',
  },
  {
    year: '2025',
    title: 'Tekathon 4.0 Winner',
    desc: 'Winner of Tekathon 4.0, building a real-world solution under strict time constraints.',
    badge: '🥇 Winner',
  },
]

export const EXPERIENCE = [
  {
    icon: '🧠',
    title: 'Full Stack Development Intern',
    org: 'StartIQOS AI',
    period: 'Jun 2026 – Aug 2026',
    desc: 'Developed full-stack features for an AI-powered Startup Operating System, contributing to scalable frontend and backend modules, authentication, REST APIs, and production-ready workflows.',
    tags: ['Full Stack', 'React', 'Node.js', 'TypeScript'],
  },
  {
    icon: '🧠',
    title: 'Software Engineer — Core Team',
    org: 'StartIQOS AI',
    period: 'Aug 2026 – Present',
    desc: 'Continuing as part of the Core Team, building and maintaining production-ready AI-powered product features while collaborating with founders on scalable software solutions.',
    tags: ['Software Engineering', 'AI', 'Product Development'],
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
