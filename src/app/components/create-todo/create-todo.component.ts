import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  form: FormGroup;
  @Output() newTodo = new EventEmitter<TaskModel>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: [null,
        Validators.required
      ],
      date: [null]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  onSubmit(): void {
    const controls = this.form.controls;

    if (this.form.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    this.newTodo.emit(this.form.value);
    this.form.reset();
  }

}
