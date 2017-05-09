import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { UserPage } from '../pages/user.component';
import { UserAddPage } from '../pages/user-add.component';
import { UserModifyPage } from '../pages/user-modify.component';
import { UserService } from '../services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserPage,
    UserAddPage,
    UserModifyPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
