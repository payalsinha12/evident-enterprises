import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // <-- Import RouterOutlet
import { NavbarComponent } from './navbar/navbar.component';  // <-- Import NavbarComponent

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, RouterOutlet],  // <-- Add RouterOutlet
})
export class AppComponent {
  title = 'evident-enterprises';
}
