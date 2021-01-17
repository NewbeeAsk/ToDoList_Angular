import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoPointComponent } from './to-do-point/to-do-point.component';
import { AddTodoPointFormComponent } from './add-todopoint-form/add-todo-point-form.component';
import {FormsModule} from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import {TaskService} from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    ToDoPointComponent,
    AddTodoPointFormComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
