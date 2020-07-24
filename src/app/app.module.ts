import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllUserComponent } from './all-user/all-user.component';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    AllUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
