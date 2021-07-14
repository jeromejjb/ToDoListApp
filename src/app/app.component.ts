import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoListApp';
  todos: string[] = ["Make breakfast", "cold shower", "take vitamin d", "journal", "meditate", "Take a walk"] 
  markCompleted(todoDone : string ) : void {
    this.title = todoDone;
  }


  addTodo(todo : string) {
    this.todos.push(todo);
  }
}