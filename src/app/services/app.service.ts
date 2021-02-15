import { TaskModel, TaskStatus } from '../models/task.model';

export class AppService {

  private tasks: TaskModel[] = [
    { id: 8, name: "Find solution", date: "2021-03-31", status: TaskStatus.completed },
    { id: 7, name: "Reseive request", date: "2021-02-15", status: TaskStatus.active },
    { id: 6, name: "Observe problem", date: "2021-01-28", status: TaskStatus.expired },
    { id: 5, name: "Sort Info", date: "2021-06-11", status: TaskStatus.active },
    { id: 4, name: "Bring settings back", date: "2021-06-11", status: TaskStatus.active },
    { id: 3, name: "Go to the office", date: "2021-03-31", status: TaskStatus.completed },
    { id: 2, name: "Find bug", date: "2021-02-15", status: TaskStatus.active },
    { id: 1, name: "Write docs", date: "2021-01-28", status: TaskStatus.expired }
  ];

  constructor() { }

  getTasks(): TaskModel[] {
    return this.tasks;
  }

  setTask(task: TaskModel): void {
    this.tasks.unshift({
      ...task,
      id: this.tasks[0].id + 1,
      status: 0
    });
  }

  changeStatusCompleted(id: number): void {
    this.tasks.forEach((task: TaskModel) => {
      if(task.id === id) task.status = TaskStatus.completed;
    });
  }

  parseDate(date: string): Date {
    if (!date) return new Date();
    return new Date(date);
  }

  checkTaskExpired(): void {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    this.tasks.forEach((task: TaskModel) => {
      if (date.getTime() > this.parseDate(task.date).getTime())
        task.status = TaskStatus.expired;
    });
  }
}
