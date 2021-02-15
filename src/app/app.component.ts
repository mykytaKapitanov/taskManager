import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { TaskModel } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks: TaskModel[] = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.checkTaskExpired();
    this.tasks = this.appService.getTasks();
  }

  addNewTask(task: TaskModel): void {
    this.appService.setTask(task);
    this.appService.checkTaskExpired();
  }

  updateTaskCompleted(item: TaskModel): void {
    this.appService.changeStatusCompleted(item.id);
  }
}
