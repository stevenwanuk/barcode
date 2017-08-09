import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieOptions, CookieService } from 'angular2-cookie/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../model/product';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

    constructor(private _router: Router, private _http: Http, private _cookieService: CookieService) { }



    getProducts(): Observable<Product[]> {
        const headers = new Headers({
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Authorization': 'Bearer ' + this._cookieService.get('access_token')
        });
        alert(this._cookieService.get('access_token'));
        const options = new RequestOptions({ headers: headers });
        return this._http.get('http://localhost:8082/barcode-api/products', options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
