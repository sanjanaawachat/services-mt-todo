import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoDashComponent } from './shared/components/todo-dash/todo-dash.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogActions, MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoDashComponent,
    TodoFormComponent,
    TodoListComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule

  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
