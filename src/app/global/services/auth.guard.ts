import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

import { UserService } from './user.service';
import { UserRoles } from '../models/user';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    public canActivate(route: ActivatedRouteSnapshot): boolean {
        const allowedRoles: UserRoles[] = route.data.allowedRoles;
        if (allowedRoles) {
            const userRole = this.userService && this.userService.user && this.userService.user.role;
            const userHasRoles = allowedRoles.findIndex((role) => role === userRole) > -1;
            if (!userHasRoles) {
                this.router.navigate(['/home']);
                return false;
            }
        }
        return this.userService.loggedIn;
    }
}
