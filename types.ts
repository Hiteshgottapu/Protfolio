
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  isAwardWinner?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  category: 'Languages' | 'ML/DL' | 'GenAI' | 'Data/Ops';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
