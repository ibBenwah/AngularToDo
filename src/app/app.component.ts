import { Component, ValueProvider } from '@angular/core';
import { NgForm } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularToDo';
  toDo: string[] = ['Homework', 'Lanudry', 'Dishes', 'Watch TV', 'Relax'];

  completeTask(newTaskParam: string): void{
    
  }

  addTask(itemParam: NgForm): void{
    let item: string = itemParam.form.value.toDo;
    this.toDo.push(item);
  }


  removeTask(index: number): void[
    this.tasks[this.findCorrectIndex(index)]
  ] 
}