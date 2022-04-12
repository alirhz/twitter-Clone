import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material.module';
import { HomeRoutingModule } from './home-routing.module';
import { tweetsService } from './home.service';
import { TrendsComponent } from './home/trends/trends.component';

@NgModule({
  declarations: [
    HomeComponent,
    TrendsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ],
  providers: [tweetsService],
})
export class HomeModule { }
