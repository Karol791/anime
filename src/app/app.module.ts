import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './characters/characters.component';
import { NewsComponent } from './news/news.component';
import { AnimesComponent } from './animes/animes.component';
import { HighlightDirective } from './highlight.directive';
import { ShortenPipe } from './shorten.pipe';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    NewsComponent,
    AnimesComponent,
    HighlightDirective,
    ShortenPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
