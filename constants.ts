
import { Project, Experience, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Hitesh Gottapu",
  title: "AI Product Engineer & Data Scientist",
  tagline: "Building production-grade AI systems, not just notebooks. 0-2 YOE with SaaS-scale impact.",
  bio: "AI & Data Science graduate with deep experience in deploying ML pipelines, LLM-powered agents, and NLP applications. 5+ Hackathon winner and technical builder with a community of 8.3k+ followers on LinkedIn.",
  location: "Hyderabad, Telangana",
  email: "hiteshgottapu@gmail.com",
  github: "https://github.com/Hiteshgottapu",
  linkedin: "https://www.linkedin.com/in/hitesh-data-scientist/",
  stats: {
    hackathons: "5+ Wins",
    hackerRank: "Top 1%",
    linkedin: "8.3k+",
    publications: "1 Research"
  }
};

export const SKILLS: Skill[] = [
  { name: 'Python & SQL', category: 'Languages' },
  { name: 'scikit-learn', category: 'ML/DL' },
  { name: 'PyTorch/TF', category: 'ML/DL' },
  { name: 'Computer Vision', category: 'ML/DL' },
  { name: 'LangChain/RAG', category: 'GenAI' },
  { name: 'Agentic Workflows', category: 'GenAI' },
  { name: 'Prompt Eng.', category: 'GenAI' },
  { name: 'OAuth/APIs', category: 'Data/Ops' },
  { name: 'GCP/Firebase', category: 'Data/Ops' },
  { name: 'FastAPI/Flask', category: 'Data/Ops' },
  { name: 'Power BI', category: 'Data/Ops' },
  { name: 'MLOps/Actions', category: 'Data/Ops' },
];

export const PROJECTS: Project[] = [
  {
    title: "LensAI Architecture",
    description: "SaaS-scale identity & data layer for automated candidate document ingestion via multi-provider OAuth (Google, Microsoft). Built token lifecycle management and background sync workers.",
    tags: ["OAuth 2.0", "Firebase", "Graph API", "Webhooks"],
    link: "https://github.com/Hiteshgottapu",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
    isAwardWinner: false
  },
  {
    title: "MedScript AI",
    description: "Award-winning OCR pipeline for medical prescriptions. Improved parsing accuracy by 28% and achieved sub-1.5s inference via optimized contour detection and CNN matching.",
    tags: ["Google Vision", "OpenCV", "CNN", "Flask"],
    link: "https://github.com/Hiteshgottapu",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    isAwardWinner: true
  },
  {
    title: "ReActAI Agent",
    description: "Autonomous research agent using ReAct patterns for research queries. Integrated memory, RAG, and real-time feedback, optimizing output relevance by 35%.",
    tags: ["LangChain", "Groq", "FastAPI", "Agentic AI"],
    link: "https://github.com/Hiteshgottapu",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    isAwardWinner: false
  },
  {
    title: "Code Quality Research",
    description: "Real-time Code Quality Prediction using Hybrid ML (published in ICAML 2025). Combined static metrics and NLP embeddings for early defect detection.",
    tags: ["Research", "NLP", "Embeddings", "Hybrid ML"],
    link: "#",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
    isAwardWinner: false
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "NeuzenAI",
    role: "Data Science Intern",
    period: "Nov 2025 - Present",
    achievements: [
      "Engineered the multi-provider OAuth pipeline for LensAI enabling automated ingestion for Drive, Outlook, and SharePoint.",
      "Upgraded ingestion architecture with token lifecycle management, background sync workers, and webhook receivers for scalable ML workloads.",
      "Designed no-code Zapier workflows for resume collection, reducing manual data gathering significantly.",
      "Benchmarked SMS channels (Plivo/Twilio) for ML-driven candidate notification flows."
    ]
  },
  {
    company: "House of Couton Pvt Ltd",
    role: "Subject Matter Expert – AI/ML",
    period: "Mar 2025 - July 2025",
    achievements: [
      "Deployed an LLM-powered chatbot for customer support using GPT and LangChain with GCP integration.",
      "Built real-time fraud indicators and monitoring dashboards using Power BI + Python.",
      "Automated reporting pipelines via GitHub Actions, reducing manual workload by 60%."
    ]
  },
  {
    company: "Megaminds IT Services",
    role: "Data Science Developer",
    period: "May 2024 - Nov 2024",
    achievements: [
      "Developed a Python-based LLM chatbot with NER and intent classification for query resolution.",
      "Built ML models and published interactive insights via Streamlit dashboards.",
      "Led tabular fraud pattern analysis for telecom churn prediction and optimized SQL scripts for high-risk cohort segmentation."
    ]
  }
];

export const EDUCATION = [
  {
    institution: "Seshadri Rao Gudlavalleru Engineering College",
    degree: "B.Tech – Artificial Intelligence & Data Science",
    period: "Nov 2021 - Apr 2025",
    details: "Courses: Deep Learning, Computer Vision, Data Analytics, A/B Testing, NLP"
  },
  {
    institution: "BITS School of Management (BITSoM)",
    degree: "Product Management with GenAI & Agentic AI",
    period: "Jul 2025 - Present",
    details: "Focus on AI agent design, multi-agent systems, and business alignment."
  }
];
