import {Component, Input, OnInit} from '@angular/core';
import Task from '../task.model';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-to-do-point',
  templateUrl: './to-do-point.component.html',
  styleUrls: ['./to-do-point.component.scss'],
  providers: [TaskService]
})
export class ToDoPointComponent implements OnInit {

  @Input() todos: Task[];

  constructor(private httpService: TaskService) {
    this.todos = [];
  }

  ngOnInit(): void {
  }

  changeStatus(todo: any): void {
    todo.done = !todo.done;
    this.httpService.updateTaskRequest(todo).subscribe();
  }

  deleteTask(todo: any): void {
    this.httpService.deleteTaskRequest(todo).subscribe();
    this.todos = this.todos.filter(el => el.id !== todo.id);
  }
}
