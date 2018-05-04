import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GotService } from './houses-table/got.service';
import { HousesTableComponent } from './houses-table/houses-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HousesTableComponent
  ],
  imports: [
    BrowserModule,  
    HttpClientModule
  ],  
  providers: [ GotService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
