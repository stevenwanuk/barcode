import { Component, OnInit } from '@angular/core';
import { OauthService } from './../service/oauth.service';

@Component({
  selector: 'app-home',
  providers: [OauthService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _oauthService: OauthService) { }

  ngOnInit() {

    this._oauthService.checkCredentials();
  }

  logout() {
    this._oauthService.logout();
  }
}
