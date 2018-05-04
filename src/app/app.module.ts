import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],  
  providers: [ GotService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
