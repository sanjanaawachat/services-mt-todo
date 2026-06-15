export interface Itodo {
 id: number;
    todoItem: string;
    completed: boolean;
}


export interface Iresponse {
  data: Itodo[];
  msg: string;
}