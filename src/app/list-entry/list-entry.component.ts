import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {Todo} from "../todo.interface";
import {PriorityComponent} from "../priority/priority.component";

@Component({
  selector: 'app-list-entry',
  standalone: true,
  imports: [
    NgIf,
    PriorityComponent
  ],
  templateUrl: './list-entry.component.html',
  styleUrl: './list-entry.component.css'
})
export class ListEntryComponent {
  @Input() todo!: Todo;
}
