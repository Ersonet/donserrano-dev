import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/Usuarios.Component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' }
];
