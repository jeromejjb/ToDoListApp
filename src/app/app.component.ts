import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiTestService } from './apiTest.service';
import { Logger } from './logger.service';
import { Todo } from './todo/todo';
import { Person } from './swapiPerson'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Logger, ApiTestService]
})
export class AppComponent {
  title="todoList";

person: Person |null = null;

constructor(private logger: Logger, private api: ApiTestService){ }
testLogger(){
  this.logger.log("Hello World");
}
  

swapiCall(id: number){
  let response = this.api.getPerson(id);
  console.log(response);

  response.subscribe(
    //data here represents data coming out of out observable
    //this variable should give us access to the JSON of our API result 
  (data: Person) => this.person = 
  {name:data.name, height:data.height, homeworld:data.homeworld, films:data.films }


  );
}
  todoList: Todo[] = [
  {completed: true, task: "Make Coffee"},
  {completed: false, task: "Take a cold shower"},
  {completed: false, task: "Take Vitamin D"},
  {completed: true, task: "Drink Water"},
  {completed: false, task: "Make Breakfast"},
  {completed: true, task: "Order Books"},
  {completed: false, task: "Apply For Jobs"}
]
  
  
  addTask(form: NgForm) {
  let entry: Todo = { task: "sample", completed: false};
  entry.task = form.form.value.task;
  this.todoList.push(entry)
  console.log(entry)

  
}

completeTask(todoList: Todo) {
  todoList.completed = true;
}

removeItem(index : number){
this.todoList.splice(index, 1);
}


  ngOnInit(): void {
  }

}

