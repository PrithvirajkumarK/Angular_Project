import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { DryCodeComponent } from './User/dry-code.component';
import { CounterComponent } from './counter/counter.component';
import { DynamicClrComponent } from './dynamic-clr/dynamic-clr.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { BoxComponent } from './box/box.component';
import { FormsModule } from '@angular/forms';
import { AddMovieComponent } from './add-movie/add-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    DryCodeComponent,
    CounterComponent,
    DynamicClrComponent,
    ColorBoxComponent,
    BoxComponent,
    AddMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
