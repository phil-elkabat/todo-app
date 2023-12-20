import {Component, Input, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./priority.component.css']
})
export class PriorityComponent implements AfterViewInit {
  @Input() priority?: 'low' | 'medium' | 'high';

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    console.log(this.priority); // Log the priority value
    this.cdr.detectChanges(); // Manually trigger change detection
  }
}
