import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  
  private tasks: Array<TaskModel> = [
    { id: 1, name: "Find solution", date: "2021-03-31", status: 1 },
    { id: 2, name: "Reseive request", date: "2021-02-15", status: 0 },
    { id: 3, name: "Observe problem", date: "2021-01-28", status: -1 },
    { id: 4, name: "Sort Info", date: "2021-06-11", status: 0 },
    { id: 5, name: "Bring settings back", date: "2021-06-11", status: 0 },
    { id: 6, name: "Go to the office", date: "2021-03-31", status: 1 },
    { id: 7, name: "Find bug", date: "2021-02-15", status: 0 },
    { id: 8, name: "Write docs", date: "2021-01-28", status: -1 }
  ];

  constructor() { }

  getData(): Array<TaskModel> {
    return this.tasks;
  }

  addData(task: TaskModel) {
    this.tasks.push({
      ...task,
      id: this.tasks[this.tasks.length - 1].id + 1,
      status: 0
    });
  }

  changeStatusDone(num: number) {
    debugger;
    if (num <= this.tasks.length) this.tasks[num - 1].status = 1;
  }

  parseDate(dateString: string): Date {
    if(!dateString) return null;
    const info = dateString.split("-").map((v: string) => {
      return Number.parseInt(v);
    });;
    const date = new Date(info[0], info[1] - 1, info[2] + 1);
    return date;
  }

  checkDateActual() {
    let date = new Date();
    this.tasks.forEach((v) => {
      if (date.getTime() > this.parseDate(v.date).getTime()) v.status = -1;
    });
  }
}
