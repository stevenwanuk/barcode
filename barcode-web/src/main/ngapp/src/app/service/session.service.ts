
import { Injectable, PACKAGE_ROOT_URL } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../model/user';
import { OauthService } from './oauth.service';

@Injectable()
export class SessionService {

    private user: User = new User();

    constructor(private _router: Router, private _oauthService: OauthService) { console.log('new instance of SessionService'); }

    login(loginData) {
        this._oauthService.obtainAccessToken(loginData).subscribe(data => {

            this.user.token = data;
            this.user.email = loginData.username;
            this.user.isLogin = true;

            console.log('login success');

            this._router.navigate(['/']);
        });
    }

    getUser(): User {
        return this.user;
    }

    isLogin(): boolean {

        console.log('user.isLogin: ' + this.user.isLogin);
        return this.user.isLogin;
    }

    logout() {
        this.user = new User();
        this._router.navigate(['/login']);
    }

}
