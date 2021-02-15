import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    CreateTodoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
