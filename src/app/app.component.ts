import {Component, Input, OnInit} from '@angular/core';
import Task from './task.model';
import {TaskService} from './task.service';
import {ListService} from './list.service';
import List from './list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TaskService, ListService]
})
export class AppComponent implements OnInit {

  @Input() public todos: Task[];
  public listID: any;
  public todoLists: List[] = [];

  constructor(private httpTaskService: TaskService, private httpListService: ListService) {
    this.listID = 1;
    this.todos = [];
  }

  title = 'ToDoList';

  ngOnInit(): void {
    this.httpListService.getLists().subscribe((data: List[]) => (this.todoLists = data));
  }
  getCurrentList(list: any): void {
    this.httpTaskService.getTasks(list.id).subscribe((data: Task[]) => (this.todos = data));
    this.listID = list.id;
  }
}
