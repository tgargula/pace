export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export type Task = {
  id: string;
  name: string;
  deadline: Date;
  priority: Priority;
  minutesEstimation: number;
}