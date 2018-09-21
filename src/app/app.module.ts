import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FindFilmComponent} from './components/find-film/find-film.component';
import { AppRoutingModule} from './app-routing.module';
import {routingModule} from './app-routing.module';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FindFilmComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
