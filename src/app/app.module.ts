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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { WelcomemsgComponent } from './welcomemsg/welcomemsg.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { AddNewMovieComponent } from './add-new-movie/add-new-movie.component';

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
    WelcomemsgComponent,
    NotfoundComponent,
    AddNewMovieComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
