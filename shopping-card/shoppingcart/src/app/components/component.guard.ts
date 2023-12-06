import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    console.log(isAdmin);
    
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    console.log(isLoggedIn);
    

    if (isAdmin && isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
