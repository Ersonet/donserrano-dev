import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  usuarios = [
    { nombre: 'Jefferson', email: 'jefferson@example.com' },
    { nombre: 'Ana', email: 'ana@example.com' }
  ];

  publicaciones = [
    { titulo: 'Angular Modular', autor: 'Jefferson' },
    { titulo: 'Node.js Express', autor: 'Ana' }
  ];
}
