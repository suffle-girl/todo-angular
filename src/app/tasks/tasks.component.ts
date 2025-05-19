import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  tasks = DUMMY_TASKS;
}
