import {Component, Output, EventEmitter} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Todo} from "../todo.interface";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() todoAdded = new EventEmitter<Todo>();

  newTodoName = '';
  newTodoPriority: 'low' | 'medium' | 'high' = 'medium';
  newTodoDueDate = new Date();
  newTodoCategory: any;
  categories: string[] = ['Garten', 'Küche', 'Sport', 'Gesundheit', 'Finanzen'];

  addTodo() {
    if (this.newTodoName.trim()) {
      const newTodo: Todo = {
        name: this.newTodoName,
        priority: this.newTodoPriority,
        dueDate: this.newTodoDueDate,
        category: this.newTodoCategory
      };
      this.todoAdded.emit(newTodo);

      // Reset the form
      this.newTodoName = '';
      this.newTodoPriority = 'medium';
      this.newTodoDueDate = new Date();
    }
  }
}
