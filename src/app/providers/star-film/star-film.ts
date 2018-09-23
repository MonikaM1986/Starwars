import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StarFilmProvider {
  constructor(public http: HttpClient) {
  }

  getTitle() {
    return this.http.post('https://swapi.co/api/films', '', {observe: 'response'});
  }

  getUrl(url) {
    return this.http.post(url, '', {observe: 'response'});
  }
}
