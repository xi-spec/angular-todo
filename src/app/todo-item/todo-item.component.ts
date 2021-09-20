import { Todo } from './../shared/todo.model';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import tippy from 'tippy.js';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit, AfterViewInit {
  @Input() todo: Todo;
  @Output() todoClicked = new EventEmitter();
  @Output() editClicked = new EventEmitter();
  @Output() deleteClicked = new EventEmitter();
  @ViewChild('editBtn') editBtnElRef: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    tippy(this.editBtnElRef.nativeElement, { content: 'Edit todo' });
  }

  onTodoClicked(): void {
    this.todoClicked.emit();
  }

  onEditClicked(): void {
    this.editClicked.emit();
  }

  onDelete(): void {
    this.deleteClicked.emit();
  }
}
