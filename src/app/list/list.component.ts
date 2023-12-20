import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ListEntryComponent} from "../list-entry/list-entry.component";

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
  todos = ['Rasen mähen', 'Spülmaschine ausräumen', 'Fußballtraining absagen', 'Krankenkasse wechseln', 'Rechgnungen überweisen', 'Kontoauszüge holen'];
}
