import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as base64 from 'base-64';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AppSetting } from './../app-setting';
import { Token } from './../model/token';


@Injectable()
export class OauthService {

    constructor(private _router: Router, private _http: Http) { }

    obtainAccessToken(loginData): Observable<Token> {
        const body =
            'client_id=' + AppSetting.OAUTH_CLIENT_ID
            + '&grant_type=' + AppSetting.OAUTH_CLIENT_GRANT_TYPE
            + '&username=' + loginData.username
            + '&password=' + loginData.password;

        /* spring oauth doesn't support json. 
JSON.stringify({
   username: loginData.username,
   password: loginData.password,
   grant_type: AppSetting.OAUTH_CLIENT_GRANT_TYPE,
   client_id: AppSetting.OAUTH_CLIENT_ID
});
*/
        const headers = new Headers({
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Authorization': 'Basic ' + base64.encode(AppSetting.OAUTH_CLIENT_ID + ':' + AppSetting.OAUTH_CLIENT_SECRET)
        });
        const options = new RequestOptions({ headers: headers });
        console.log(body);
        console.log(base64.encode(AppSetting.OAUTH_CLIENT_ID + ':' + AppSetting.OAUTH_CLIENT_SECRET));
        return this._http.post(AppSetting.OAUTH_TOKEN_API_URL, body, options)
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
