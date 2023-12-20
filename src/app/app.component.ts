import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FormsModule} from "@angular/forms";
import {FormComponent} from "./form/form.component";
import {Todo} from "./todo.interface";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListComponent, NavbarComponent, FormsModule, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isFormVisible = false;
  todos: Todo[] = [
    // Existing todos
    {name: 'Rasen mähen', priority: 'high', dueDate: new Date(2023, 12, 15), category: 'Garten'},
    {name: 'Spülmaschine ausräumen', priority: 'medium', dueDate: new Date(2023, 12, 16), category: 'Küche'},
    {name: 'Fußballtraining absagen', priority: 'low', dueDate: new Date(2023, 12, 20), category: 'Sport'},
    {name: 'Krankenkasse wechseln', priority: 'medium', dueDate: new Date(2023, 12, 21), category: 'Gesundheit'},
    {name: 'Rechgnungen überweisen', priority: 'high', dueDate: new Date(2023, 12, 22), category: 'Finanzen'},
    {name: 'Kontoauszüge holen', priority: 'low', dueDate: new Date(2023, 12, 23), category: 'Finanzen'}
  ];

    toggleForm() {
        this.isFormVisible = !this.isFormVisible;
    }

    onTodoAdded(newTodo: Todo) {
        this.todos.push(newTodo);
    }
}
