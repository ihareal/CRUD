import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuardLogin implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser') === null) {
            // if u aren't logged you will redirect to login page
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return true;
        } else {
            return false;
        }
    }
}