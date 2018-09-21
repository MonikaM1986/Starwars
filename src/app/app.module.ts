import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FindFilmComponent} from './components/find-film/find-film.component';
import { AppRoutingModule} from './app-routing.module';
import {routingModule} from './app-routing.module';
import { DetailComponent } from './components/detail/detail.component';
import { MatInputModule, MatFormFieldModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FindFilmComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routingModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
