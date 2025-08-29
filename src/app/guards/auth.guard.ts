import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

// auth.guard.ts
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token; // solo permite si hay token
  }
}
logout(); void {
  localStorage,removeItem(){'authToken'}
  // redirigir a la página de inicio de sesión
}
function logout() {
  throw new Error("Function not implemented.");
}

