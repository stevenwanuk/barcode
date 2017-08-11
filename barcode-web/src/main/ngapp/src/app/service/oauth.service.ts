import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieOptions, CookieService } from 'angular2-cookie/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AppSetting } from './../app-setting';
import {Token} from './../model/token';


@Injectable()
export class OauthService {

    constructor(private _router: Router, private _http: Http) { }

    obtainAccessToken(loginData): Observable<Token> {
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
        return this._http.post(AppSetting.OAUTH_TOKEN_API_URL, params.toString(), options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
