import { Component, OnInit } from '@angular/core';
import { OauthService } from './../service/oauth.service';
import { SessionService } from './../service/session.service';
import { User } from './../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home/home.component.html',
  styleUrls: ['./home/home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _sessionService: SessionService) { }

  private user: User;

  ngOnInit() {

    this.user = this._sessionService.getUser();
  }

  logout() {
    this._sessionService.logout();
  }
}
