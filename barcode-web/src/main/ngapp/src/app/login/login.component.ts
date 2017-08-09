import { OauthService } from './../service/oauth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  providers: [OauthService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = { username: 'stevenwanuk@gmail.com', password: '123' };

  constructor(private _oauthService: OauthService) { }

  ngOnInit() {
  }

  login() {
    this._oauthService.obtainAccessToken(this.loginData);
  }

}
