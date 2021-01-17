import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskService} from '../task.service';
import Task from '../task.model';
import List from '../list.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [TaskService]
})
export class SidebarComponent implements OnInit {

  @Input() todoLists: any;
  @Output() getTasks = new EventEmitter<List>();

  constructor(private httpTaskService: TaskService) {
  }

  ngOnInit(): void {
  }

  getTasksByListEvent(list: List): any {
    this.getTasks.emit(list);
  }
}
