export interface TaskModel {
  id: number;
  name: string;
  date: string;
  status: TaskStatus;
}

export enum TaskStatus {
  completed = "completed",
  active = "active",
  expired = "expired"
}