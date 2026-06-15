import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Itodo } from '../../models/Itodo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { SnackBar } from '../../services/snackbar.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
todoArr:Itodo[]=[];
  constructor(private _todoservice:TodoService,private _matDialog:MatDialog,  private _snackBar:SnackBar) { }

  ngOnInit(): void {
  this.gettodo();
  }

  gettodo(){
  this._todoservice.fetchalltodo().subscribe({
    next:(data)=>{
      console.log(data);
      this.todoArr=data;
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
  }

onEdittodo(edittodo:Itodo){
console.log(edittodo);
this._todoservice.edittodopatch$.next(edittodo);
  }

  onremovetodo(removeid:number){
let config=new MatDialogConfig()
config.width='400px'
config.disableClose=true
config.data=`Are you you want to remove the Todo with Id ${removeid}..?`

let matDialogRef=this._matDialog.open(GetConfirmComponent, config);
matDialogRef.afterClosed().subscribe((getConfirm)=>{
  if(getConfirm===true){
    this._todoservice.removeTodo(removeid);
    this._snackBar.openSnackBar(`Todo remove successfully... ${removeid}`,close);
  }
})
  }
}
