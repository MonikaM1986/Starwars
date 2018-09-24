import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FindFilmComponent} from './components/find-film/find-film.component';
import { AppRoutingModule} from './app-routing.module';
import {routingModule} from './app-routing.module';
import { DetailComponent } from './components/detail/detail.component';
import {CarouselModule} from 'angular2-carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import {HttpClientModule} from '@angular/common/http';
import {StarFilmProvider} from './providers/star-film/star-film';

@NgModule({
  declarations: [
    AppComponent,
    FindFilmComponent,
    DetailComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routingModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [StarFilmProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
