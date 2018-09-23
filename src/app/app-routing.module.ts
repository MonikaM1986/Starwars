import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FindFilmComponent} from './components/find-film/find-film.component';
import {DetailComponent} from './components/detail/detail.component';
import {CarouselComponent} from 'angular2-carousel';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/findFilm',
    pathMatch: 'full'
  },
  {
    path: 'findFilm',
    component: FindFilmComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
  },

  // { path: 'findFilm', component: FindFilmComponent,
  //   children: [
  //     { path: 'detail', component: DetailComponent }
  //   ]
  // }
];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: []
})
export class AppRoutingModule { }
