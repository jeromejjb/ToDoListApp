import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo'
import { NgForm } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
 
})
export class ToDoListComponent implements OnInit {

// Pre-populate task list
  items: Todo[] = [
  {task: "Make Coffee", completed: true},
  {task: "Take a cold shower",completed: true},
  {task: "Take Vitamin D",completed: false},
  {task: "Drink Water", completed: true},
  {task: "Make Breakfast", completed: true},
  {task: "Order Books", completed: true},
  {task: "Apply For Jobs", completed: true}
]
  
  
  addTask(form: NgForm) {
  let entry: Todo = { task: "sample", completed: false};
  entry.task = form.form.value.task;
  this.items.push(entry)
  console.log(entry)

  
}


completeTask(i: number) {
  this.items.splice(i,1);

}

deleteTask(i: number) {
  this.items.splice(i, 1);
}



constructor() { }

  ngOnInit(): void {
  }

}
