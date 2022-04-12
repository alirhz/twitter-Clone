import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';


import { MaterialModule } from './material.module';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    CommonModule,
    HomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
