import { Component, OnInit } from '@angular/core';
import { SessionService } from './../service/session.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = { username: 'stevenwanuk@gmail.com', password: '123' };

  constructor(private _router: Router, private _sessionService: SessionService) { }

  ngOnInit() {
  }

  login() {
    this._sessionService.login(this.loginData);
  }

}
