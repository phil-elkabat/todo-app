import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-list-entry',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './list-entry.component.html',
  styleUrl: './list-entry.component.css'
})
export class ListEntryComponent {
  @Input() todo?: string;
}
