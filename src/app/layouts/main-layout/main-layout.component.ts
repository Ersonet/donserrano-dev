import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { HomeRoutingModule } from "../../pages/home/home-routing.module";
import { Footer } from "../../shared/components/footer/footer";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  imports: [NavbarComponent, HomeRoutingModule, Footer]
})
export class MainLayoutComponent {}
