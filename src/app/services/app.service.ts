import { TaskModel, TaskStatus } from '../models/task.model';

export class AppService {

  private tasks: TaskModel[] = [
    { id: 1, name: "Find solution", date: "2021-03-31", status: TaskStatus.completed },
    { id: 2, name: "Reseive request", date: "2021-02-15", status: TaskStatus.active },
    { id: 3, name: "Observe problem", date: "2021-01-28", status: TaskStatus.expired },
    { id: 4, name: "Sort Info", date: "2021-06-11", status: TaskStatus.active },
    { id: 5, name: "Bring settings back", date: "2021-06-11", status: TaskStatus.active },
    { id: 6, name: "Go to the office", date: "2021-03-31", status: TaskStatus.completed },
    { id: 7, name: "Find bug", date: "2021-02-15", status: TaskStatus.active },
    { id: 8, name: "Write docs", date: "2021-01-28", status: TaskStatus.expired }
  ];

  constructor() { }

  getTasks(): TaskModel[] {
    return this.tasks;
  }

  setTask(task: TaskModel): void {
    this.tasks.push({
      ...task,
      id: this.tasks[this.tasks.length - 1].id + 1,
      status: 0
    });
  }

  changeStatusCompleted(id: number): void {
    if (id <= this.tasks.length)
      this.tasks[id - 1].status = TaskStatus.completed;
  }

  parseDate(date: string): Date {
    if (!date) return null;
    return new Date(date);
  }

  checkTaskExpired(): void {
    const date = new Date();
    const oneDayInMs = 86400000;
    this.tasks.forEach((task) => {
      if (date.getTime() > this.parseDate(task.date).getTime() + oneDayInMs)
        task.status = TaskStatus.expired;
    });
  }
}
