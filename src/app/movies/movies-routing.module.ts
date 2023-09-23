import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { AddNewMovieComponent } from '../add-new-movie/add-new-movie.component';
import { EditMovieFormComponent } from '../edit-movie-form/edit-movie-form.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';


const routes: Routes = [
{path:"",component:AddMovieComponent, pathMatch:"full"},
{path:"edit/:id",component:EditMovieFormComponent, pathMatch:"full"},
{path:"Add-movies",component:AddNewMovieComponent, pathMatch:"full"},
{path:":id",component:MovieDetailsComponent, pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
