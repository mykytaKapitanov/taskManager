import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks: Array<Object> = [];

  constructor(private appService: AppService) {}

  ngOnInit(){
    this.appService.checkDateActual();
    this.tasks = this.appService.getData();
  }

  addNewTodo(todo: Object){
    this.appService.addData(todo);
    this.appService.checkDateActual();
  }

  updateTodoFinished(item: Object) {
    this.appService.changeStatusDone(item['id']);
  }
}
