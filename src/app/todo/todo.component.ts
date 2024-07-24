import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks = [
    {
      title: 'Apprendre Javascript',
      description: 'Maîtrisez le langage qui propulse le web moderne.',
      startDate: '01-07-2024',
      completed: false
    },
    {
      title: 'Apprendre Angular',
      description: 'Maîtrisez le framwork qui propulse le web moderne.',
      startDate: '01-08-2024',
      completed: false
    }
  ];
  newTask = { title: '', description: '', startDate: '', completed: false };
  showForm = false;

  addTask() {
    if (this.newTask.title && this.newTask.description && this.newTask.startDate) {
      this.tasks.push({ ...this.newTask });
      this.newTask = { title: '', description: '', startDate: '', completed: false };
      this.showForm = false;
    }
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  markAsCompleted(task: any) {
    task.completed = true;
  }

  deleteTask(task: any) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
