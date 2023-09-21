import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { Task2Component } from './task2/task2.component';
import { WelcomemsgComponent } from './welcomemsg/welcomemsg.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddNewMovieComponent } from './add-new-movie/add-new-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { EditMovieFormComponent } from './edit-movie-form/edit-movie-form.component';

const routes: Routes = [{path:"",component:WelcomemsgComponent, pathMatch:"full"},
{path:"movie-list",component:AddMovieComponent, pathMatch:"full"},
{path:"flim",redirectTo:"/movies", pathMatch:"full"},
{path:"movies",component:Task2Component, pathMatch:"full"},
{path:"movies/:id",component:MovieDetailsComponent, pathMatch:"full"},
{path:"movies/edit/:id",component:EditMovieFormComponent, pathMatch:"full"},
{path:"Add-movies",component:AddNewMovieComponent, pathMatch:"full"},
{ path: '**', component: NotfoundComponent,pathMatch:"full" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
