import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SessionService } from './service/session.service';
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router: Router, private _sessionService: SessionService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this._sessionService.isLogin()) {
            // logged in so return true
            console.log('login already');
            return true;
        }

        console.log(state.url  + ' redirect to /login');
        // not logged in so redirect to login page with the return url
        this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
