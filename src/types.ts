export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'brain' | 'database' | 'workflow';
  processSteps: {
    title: string;
    description: string;
  }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedIn: string;
}

export interface ContactData {
  name: string;
  company: string;
  email: string;
  projectScope: 'AI Strategy' | 'Data Architecture' | 'Agentic Workflows' | 'Other';
  message: string;
}

export type FormStatus = 'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR';
