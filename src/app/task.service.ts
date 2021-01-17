import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) {
  }

  getTasks(list = 1): Observable<any> {
    return this.http.get(`http://localhost:8080/lists/${list}/tasks?all=true`);
  }

  postTask(task: any, list: number): Observable<any> {
    return this.http.post(`http://localhost:8080/lists/${list}/tasks`, task);
  }

  deleteTaskRequest(task: any): Observable<any> {
    return this.http.delete(`http://localhost:8080/lists/${task.taskList.id}/tasks/${task.id}`);
  }

  updateTaskRequest(task: any): Observable<any> {
    return this.http.put(`http://localhost:8080/lists/${task.taskList.id}/tasks/${task.id}`, task);
  }
}
