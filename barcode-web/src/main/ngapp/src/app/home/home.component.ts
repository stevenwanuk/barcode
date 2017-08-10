import { Component, OnInit } from '@angular/core';
import { OauthService } from './../service/oauth.service';
import { SessionService } from './../service/session.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _sessionService: SessionService) { }

  ngOnInit() {
  }

  logout() {
    this._sessionService.logout();
  }
}
