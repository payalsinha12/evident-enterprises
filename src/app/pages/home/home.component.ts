import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';  // Import FooterComponent
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,   // This is a standalone component
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [FooterComponent]  // Add FooterComponent here
})
export class HomeComponent {
  constructor(private router: Router) {}

navigateToContact() {
  this.router.navigate(['/contact']);  // Navigates programmatically
}
}