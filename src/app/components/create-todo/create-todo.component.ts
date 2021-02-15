import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  myReactiveForm: FormGroup;
  @Output() newTodo = new EventEmitter<Object>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.myReactiveForm = this.fb.group({
      task: [null,
        Validators.required
      ],
      date: [null]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.myReactiveForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  onSubmit() {
    const controls = this.myReactiveForm.controls;

    if (this.myReactiveForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    this.newTodo.emit({ ...this.myReactiveForm.value, done: 0 });
    this.myReactiveForm.reset();
  }

}
