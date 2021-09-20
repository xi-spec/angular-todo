import { MatDialog } from '@angular/material/dialog';
import { DataService } from './../shared/data.service';
import { Todo } from './../shared/todo.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  showValidation: boolean = false;

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  onFormSubmit(form: NgForm): void {
    if (form.invalid) {
      this.showValidation = true;
      return;
    }
    this.dataService.addTodo(new Todo(form.value.text));
    this.showValidation = false;
    form.reset();
  }

  toggleCompleted(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  editTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '700px',
      data: todo,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTodo(index, result);
      }
    });
  }
  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.dataService.deleteTodo(index);
  }
}
