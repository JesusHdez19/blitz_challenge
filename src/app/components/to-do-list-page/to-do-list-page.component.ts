import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-to-do-list-page',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule, DragDropModule],
  templateUrl: './to-do-list-page.component.html',
  styleUrl: './to-do-list-page.component.css'
})
export class ToDoListPageComponent implements OnInit{

  todoForm !: FormGroup;
  tasks: Task[] = []
  inProgress: Task [] = []
  doneTasks: Task[] = []
  updateId: any
  isEditEnabled: boolean = false

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      item: ['', Validators.required]
    })
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addTask(){
    this.tasks.push({
      title: this.todoForm.value.item, checked: false
    })
    this.todoForm.reset()
  }

  editTask(item: Task, id: number){
    this.todoForm.controls['item'].setValue(item.title)
    this.updateId = id;
    this.isEditEnabled = true
  }

  deleteTask(id: number){
    this.tasks.splice(id, 1)
  }

  deleteInProgressTask(id: number){
    this.inProgress.splice(id, 1)
  }

  deleteFinishTask(id: number){
    this.doneTasks.splice(id, 1)
  }

  updateTask(){
    this.tasks[this.updateId].title = this.todoForm.value.item
    this.tasks[this.updateId].checked = false
    this.todoForm.reset()
    this.updateId = undefined
    this.isEditEnabled = false
  }

}
