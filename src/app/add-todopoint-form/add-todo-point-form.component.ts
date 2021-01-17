import {Component, Input, NgModule, OnInit} from '@angular/core';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-add-todopoint-form',
  templateUrl: './add-todo-point-form.component.html',
  styleUrls: ['./add-todo-point-form.component.scss'],
  providers: [TaskService]
})
export class AddTodoPointFormComponent implements OnInit {

  @Input() todos: any = [];
  @Input() listID: any;
  newTitle: any;
  newDescription: any;
  newStatusDone: any;
  newDueDate: any;
  hideForm: any = true;

  constructor(private httpService: TaskService) {
    this.hideForm = true;
  }

  ngOnInit(): void {
  }

  addToDoPoint(): void {
    this.httpService.postTask({
      title: this.newTitle,
      description: this.newDescription,
      done: this.newStatusDone,
      dueDate: this.newDueDate
    }, this.listID).subscribe();
    this.todos.push({
      title: this.newTitle,
      description: this.newDescription,
      done: this.newStatusDone,
      dueDate: this.newDueDate
    });
    this.newTitle = '';
    this.newDescription = '';
    this.newStatusDone = false;
    this.newDueDate = '';
    this.hideForm = !this.hideForm;
  }

  isHidden(): any {
    return this.hideForm === true;
  }

  hideShowFrom(): void {
    this.hideForm = !this.hideForm;
  }
}
