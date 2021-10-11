import { Component, OnInit } from '@angular/core';
import { Todo } from './../../Models/Todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title ="Not todos";
  todos:Todo[] = new Array();
  inputTodo:string="";
  constructor() { }

  ngOnInit(): void {
    this.todos =[
      {
        content:"First todo",
        completed:false
      },
      {
        content:"Second todo",
        completed:true
      }
    ]
  }
  
  toggleDone (id:number){
    this.todos.map((v,i) =>{
      if(i == id) v.completed =!v.completed;
      return v;
    })
  }

  deleteTodo (id:number){
    console.log(this.todos);
    console.log(id);
    this.todos = this.todos.filter((v,i) => i != id);
    console.log(this.todos);
  }
}
