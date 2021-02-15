export interface TaskModel {
  id: number;
  name: string;
  date: string;
  status: TaskStatus;
}

export enum TaskStatus {
  completed = 1,
  active = 0,
  expired = -1
}