import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-priority',
  standalone: true,
  imports: [],
  templateUrl: './priority.component.html',
  styleUrl: './priority.component.css'
})
export class PriorityComponent {
  @Input() priority?: 'low' | 'medium' | 'high';
}
