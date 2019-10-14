import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersondetailsComponent } from './persondetails/persondetails.component';
import {PersonServicesService} from './person-services.service';
import {HttpClientModule} from '@angular/common/http';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    PersondetailsComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
