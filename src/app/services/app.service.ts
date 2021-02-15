import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  
  private tasks: Array<Object> = [
    { id: 1, task: "Find solution", date: "2021-03-31", status: 1 },
    { id: 2, task: "Reseive request", date: "2021-02-15", status: 0 },
    { id: 3, task: "Observe problem", date: "2021-01-28", status: -1 },
    { id: 4, task: "Sort Info", date: "2021-06-11", status: 0 },
    { id: 5, task: "Bring settings back", date: "2021-06-11", status: 0 },
    { id: 6, task: "Go to the office", date: "2021-03-31", status: 1 },
    { id: 7, task: "Find bug", date: "2021-02-15", status: 0 },
    { id: 8, task: "Write docs", date: "2021-01-28", status: -1 }
  ];

  constructor() { }

  getData(): Array<Object> {
    return this.tasks;
  }

  addData(task: Object) {
    this.tasks.push({
      ...task,
      id: this.tasks[this.tasks.length - 1]['id'] + 1,
      status: 0
    });
  }

  changeStatusDone(num: number) {
    debugger;
    if (num <= this.tasks.length) this.tasks[num - 1]['status'] = 1;
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
      if (date.getTime() > this.parseDate(v['date']).getTime()) v['status'] = -1;
    });
  }
}
