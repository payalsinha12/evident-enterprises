import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ServicesComponent {
  services = [
    { title: 'Consulting', description: 'Expert advice to optimize your business operations and strategy.' },
    { title: 'Development', description: 'Custom software and web development tailored to your needs.' },
    { title: 'Marketing', description: 'Innovative marketing solutions to boost your brand and reach.' },
    { title: 'Design', description: 'Creative and user-friendly designs for web, mobile, and print.' }
  ];
}
