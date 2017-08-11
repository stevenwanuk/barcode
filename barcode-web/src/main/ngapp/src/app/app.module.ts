import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {CookieService} from 'angular2-cookie/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import {SessionService} from './service/session.service';
import {AuthGuard} from './app-authGuard';
import {OauthService} from './service/oauth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [CookieService, SessionService, AuthGuard, OauthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
