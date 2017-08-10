import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieOptions, CookieService } from 'angular2-cookie/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AppSetting } from './../app-setting';


@Injectable()
export class OauthService {

    constructor(private _router: Router, private _http: Http, private _cookieService: CookieService) { }

    obtainAccessToken(loginData) {
        const params = new URLSearchParams();
        params.append('username', loginData.username);
        params.append('password', loginData.password);
        params.append('grant_type', AppSetting.OAUTH_CLIENT_GRANT_TYPE);
        params.append('client_id', AppSetting.OAUTH_CLIENT_ID);

        const headers = new Headers({
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Authorization': 'Basic ' + btoa(AppSetting.OAUTH_CLIENT_ID + ':' + AppSetting.OAUTH_CLIENT_SECRET)
        });
        const options = new RequestOptions({ headers: headers });
        console.log(params.toString());
        this._http.post(AppSetting.OAUTH_TOKEN_API_URL, params.toString(), options)
            .map(res => res.json())
            .subscribe(
            data => this.saveToken(data),
            err => alert('Invalid Credentials with error:' + err)
            );
    }

    saveToken(token) {
        const expireDate = new Date().getTime() + (1000 * token.expires_in);

        const cookieOption = new CookieOptions();
        cookieOption.expires = new Date(expireDate);

        this._cookieService.put('access_token', token.access_token, cookieOption);
        console.log('Obtained Access token');

        this._router.navigate(['/']);
    }

    checkCredentials() {
        if (!this._cookieService.get('access_token')) {
            this._router.navigate(['/login']);
        }
    }

    logout() {
        this._cookieService.remove('access_token');
        this._router.navigate(['/login']);
    }
}
