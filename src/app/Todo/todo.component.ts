import { Component, OnInit } from '@angular/core';
import { Todo } from './todo'
import { NgForm } from '@angular/forms';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
 
})
export class TodoComponent implements OnInit {

title="todoList"
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


completeTask(i: number) {
  this.todoList[i].completed = true;

}


constructor() { }

  ngOnInit(): void {
  }

}
