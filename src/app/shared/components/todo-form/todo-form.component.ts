import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/Itodo';
import { TodoService } from '../../services/todo.service';
import { SnackBar } from '../../services/snackbar.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  IsinEditmode:boolean=false;
  edittodo!:Itodo;
  @ViewChild('todoForm')todoForm!:NgForm;
  constructor(private _todoservice:TodoService, private _snackBar:SnackBar) { }

  ngOnInit(): void {
this.Onedittodo();
  }
onaddtopdo(){
if (this.todoForm.valid) {

  let addOBJ: Itodo = {
    ...this.todoForm.value,
    id: Date.now().toString()
  };
  console.log(addOBJ);
  this._todoservice.getalltodo(addOBJ).subscribe({
    next: (res) => {
      console.log(res);
this._snackBar.openSnackBar(`Todo added successfully... ${res.msg}`,close);
    }
  });
  }



    
  
}

Onedittodo(){
  this._todoservice.edittodopatch$.subscribe({
    next:(data)=>{
          this.edittodo = data;   // save original object
      this.IsinEditmode = true;
this.todoForm.form.patchValue(data);
this._snackBar.openSnackBar(`Todo edited successfully... ${data.id}`,close);
    }
  
  })
}

onupdatetodo(){
let updatedobj:Itodo={

...this.todoForm.value,
id:this.edittodo.id
}
this.IsinEditmode=false;
console.log(updatedobj);
this._todoservice.updatetodo(updatedobj);
this._snackBar.openSnackBar(`Todo updated successfully... ${updatedobj.todoItem}`,close);
}
}


