export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export type Task = {
  name: string;
  deadline: Date;
  priority: Priority;
  minutesEstimation: number;
}