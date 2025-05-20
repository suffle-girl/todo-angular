import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from '../tasks.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() completeTask = new EventEmitter<string>();

  onCloseTask() {
    this.completeTask.emit(this.task.id);
  }
}
