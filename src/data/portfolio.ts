// src/data/portfolio.ts
// Central data store — edit this file to update your portfolio

export const PERSONAL = {
  name: 'Rahul Raj Jaiswal',
  shortName: 'RRJ',
  tagline: 'CSE Student | AI Enthusiast | Problem Solver',
  email: 'rahul130405@gmail.com',
  github: 'https://github.com/Rahul130405',
  linkedin: 'https://www.linkedin.com/in/rahulrajjaiswal/',
  location: 'India 🇮🇳',
  available: true,
  bio: [
    "I'm a Computer Science Engineering student with a deep passion for Artificial Intelligence, Data Structures & Algorithms, and Full Stack Development. I approach every challenge with a first-principles mindset.",
    "Whether it's building an AI-powered PDF explainer or competing in hackathons, I consistently push the limits of what's possible with code. I believe great software is invisible — it just works.",
  ],
}

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
  github: string
  demo?: string
  highlight?: string
}

export const PROJECTS: Project[] = [
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
    id: 6,
    category: 'Blockchain',
    title: 'ChainVote',
    desc: 'A decentralized voting protocol leveraging SHA-256 blockchain chaining and AES-256 encryption to ensure secure, anonymous, and tamper-proof digital elections.',
    tech: ['Django', 'Python', 'Blockchain', 'Cryptography'],
    gradient: 'linear-gradient(135deg, #1e1b4b, #312e81, #4338ca)',
    emoji: '🗳️',
    github: 'https://github.com/Rahul130405/ChainVote',
    highlight: 'Tamper-Proof Ledger',
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
    title: 'Tekathon Winner 🏆',
    desc: 'Won the prestigious Tekathon hackathon competition, delivering an innovative AI solution under intense time pressure that impressed a panel of industry judges.',
    badge: '🥇 Winner',
  },
  {
    year: '2025',
    title: 'IIT Roorkee NSS — 6th Position',
    desc: "Achieved 6th place nationally at IIT Roorkee's National Social Summit — competing against top engineering students from premier institutions across India.",
    badge: '🏅 6th National',
  },
]

export const EXPERIENCE = [
  {
    icon: '⛓',
    title: 'Blockchain Club Manager',
    org: 'College Blockchain Society',
    period: '2023 – Present',
    desc: 'Driving the adoption of Web3 technologies across the campus by leading a community of 200+ blockchain enthusiasts. Architected the club&apos;s educational roadmap, covering everything from cryptographic fundamentals to advanced smart contract development in Solidity. Mentored multiple student teams for national-level Web3 hackathons and spearheaded the development of an internal decentralized voting system for college club elections.',
    tags: ['Leadership', 'Solidity', 'Smart Contracts', 'Web3', 'Architecture'],
  },
]
