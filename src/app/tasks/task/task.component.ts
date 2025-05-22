import { Component, inject } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from '../tasks.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [DatePipe, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private taskService = inject(TaskService);

  onCloseTask() {
    this.taskService.completeTask(this.task.id);
  }
}
