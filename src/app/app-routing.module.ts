import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimesComponent } from './animes/animes.component';
import { NewsComponent } from './news/news.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  { path: '', redirectTo:'/animes', pathMatch: 'full'},
  { path: 'animes', component: AnimesComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'random', component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
