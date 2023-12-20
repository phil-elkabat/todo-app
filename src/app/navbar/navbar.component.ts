import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() neuesTodoAnlegen = new EventEmitter<void>();

  onNeuesTodoAnlegenClick() {
    this.neuesTodoAnlegen.emit();
  }
}
