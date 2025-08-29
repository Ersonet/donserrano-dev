import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForOf } from "../../node_modules/@angular/common/common_module.d";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NgForOf]
})

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class AppComponent {}
