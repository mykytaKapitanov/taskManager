import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() task: string;
  @Input() date: string;
  @Input() status: number;

  @Output() completed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void { }

  complete() {
    this.completed.emit(true);
  }

}
