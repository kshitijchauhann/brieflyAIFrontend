export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Transcription {
  id: string;
  title: string;
  content: string;
  duration: number;
  createdAt: string;
  status: 'processing' | 'completed' | 'error';
}