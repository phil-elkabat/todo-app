import {Component, Input} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {ListEntryComponent} from "../list-entry/list-entry.component";
import {Todo} from "../todo.interface";
import {PriorityComponent} from "../priority/priority.component";
import {FormComponent} from "../form/form.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ListEntryComponent,
    PriorityComponent,
    FormComponent,
    DatePipe
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() todos: Todo[] = [
    {name: 'Rasen mähen', priority: 'high', dueDate: new Date(2023, 12, 15), category: 'Garten'},
    {name: 'Spülmaschine ausräumen', priority: 'medium', dueDate: new Date(2023, 12, 16), category: 'Küche'},
    {name: 'Fußballtraining absagen', priority: 'low', dueDate: new Date(2023, 12, 20), category: 'Sport'},
    {name: 'Krankenkasse wechseln', priority: 'medium', dueDate: new Date(2023, 12, 21), category: 'Gesundheit'},
    {name: 'Rechgnungen überweisen', priority: 'high', dueDate: new Date(2023, 12, 22), category: 'Finanzen'},
    {name: 'Kontoauszüge holen', priority: 'low', dueDate: new Date(2023, 12, 23), category: 'Finanzen'}
  ];

  onTodoAdded(newTodo: Todo) {
    this.todos.push(newTodo);
  }

}
