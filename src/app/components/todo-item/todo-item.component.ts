import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskModel, TaskStatus } from '../../models/task.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() task: TaskModel;

  @Output() completed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void { }

  setCompleted(): void {
    this.completed.emit(true);
  }

  checkCompletedStatus(): boolean {
    return this.task.status === TaskStatus.completed;
  }

  checkActiveStatus(): boolean {
    return this.task.status === TaskStatus.active;
  }

  checkExpiredStatus(): boolean {
    return this.task.status === TaskStatus.expired;
  }
}
