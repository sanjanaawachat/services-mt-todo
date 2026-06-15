import { Injectable } from '@angular/core';
import { Iresponse, Itodo } from '../models/Itodo';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 edittodopatch$:Subject<Itodo>=new Subject<Itodo>();
todoArr:Itodo[]=[
  {
    id: 1,
   todoItem: 'Learn Angular',
    completed: false
  },
  {
    id: 2,
   todoItem: 'Create Todo App',
    completed: true
  },
  {
    id: 3,
   todoItem: 'Practice CRUD Operations',
    completed: false
  },
  {
    id: 4,
   todoItem: 'Learn Input Output',
    completed: true
  },
  {
    id: 5,
   todoItem: 'Deploy Angular Project',
    completed: false
  }
];
  constructor() { }
  
fetchalltodo():Observable<Itodo[]>{
  return of(this.todoArr);
}

getalltodo(addOBJ: Itodo): Observable<Iresponse>{
  this.todoArr.unshift(addOBJ);

  return of({
    data: this.todoArr,
    msg: 'Todo added successfully'
  });
}


removeTodo(id:number){
let getIndex= this.todoArr.findIndex(t=>t.id===id);
this.todoArr.splice(getIndex,1);
}

updatetodo(updatedobj:Itodo){
let getIndex=this.todoArr.findIndex(t=>t.id===updatedobj.id);
this.todoArr[getIndex]=updatedobj;
}
}
