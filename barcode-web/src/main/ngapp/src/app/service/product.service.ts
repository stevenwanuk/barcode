import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieOptions, CookieService } from 'angular2-cookie/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../model/product';
import { SessionService } from './session.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { AppSetting } from './../app-setting';

@Injectable()
export class ProductService {

    constructor(private _router: Router, private _http: Http, private _sessionService: SessionService) { }



    getProducts(): Observable<Product[]> {
        const headers = new Headers({
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Authorization': 'Bearer ' + this._sessionService.getUser().token.access_token
        });

        const options = new RequestOptions({ headers: headers });
        return this._http.get(AppSetting.RESOURCE_BASE_API_URL + 'products', options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    delete(id: string): Observable<Product> {


        const headers = new Headers({
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Authorization': 'Bearer ' + this._sessionService.getUser().token.access_token
        });
        console.log(headers.get('Authorization'));
        const options = new RequestOptions({ headers: headers });
        const url = AppSetting.RESOURCE_BASE_API_URL + 'products/' + id;
        console.log('trying to delete product:' + id + ' by url:' + url);

        return this._http.delete(url, options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
