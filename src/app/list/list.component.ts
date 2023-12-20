import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ListEntryComponent} from "../list-entry/list-entry.component";
import {Todo} from "../todo.interface";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ListEntryComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  todos: Todo[] = [
    {name: 'Rasen mähen', priority: 'high'},
    {name: 'Spülmaschine ausräumen', priority: 'medium'},
    {name: 'Fußballtraining absagen', priority: 'low'},
    {name: 'Krankenkasse wechseln', priority: 'medium'},
    {name: 'Rechgnungen überweisen', priority: 'high'},
    {name: 'Kontoauszüge holen', priority: 'low'}
  ];

}
