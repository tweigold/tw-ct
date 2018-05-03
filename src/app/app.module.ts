import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule, MatFormFieldModule, MatInputModule  } from '@angular/material';

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
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule, 
    MatInputModule
  ],  
  providers: [ GotService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
