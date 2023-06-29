import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimesComponent } from './animes/animes.component';
import { NewsComponent } from './news/news.component';
import { CharactersComponent } from './characters/characters.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  
  { path: '', redirectTo:'/animes', pathMatch: 'full'},
  { path: 'animes', component: AnimesComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'random', component: NewsComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
