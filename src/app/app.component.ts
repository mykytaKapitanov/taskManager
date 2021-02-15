import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { TaskModel } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks: Array<TaskModel> = [];

  constructor(private appService: AppService) {}

  ngOnInit(){
    this.appService.checkDateActual();
    this.tasks = this.appService.getData();
  }

  addNewTodo(todo: TaskModel){
    this.appService.addData(todo);
    this.appService.checkDateActual();
  }

  updateTodoFinished(item: TaskModel) {
    this.appService.changeStatusDone(item.id);
  }
}
