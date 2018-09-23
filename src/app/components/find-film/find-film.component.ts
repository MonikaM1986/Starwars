import {Component, OnInit} from '@angular/core';
import {StarFilmProvider} from '../../providers/star-film/star-film';
import {Router} from '@angular/router';
import {DataProvider} from '../../providers/data/data';

@Component({
  selector: 'app-find-film',
  templateUrl: './find-film.component.html',
  styleUrls: ['./find-film.component.css']
})
export class FindFilmComponent implements OnInit {

  peopleName: string;
  resultName: any;
  contentFilms: any = [];
  tempData: any = [];
  dataSubmit: any = [];
  // listFilm: any = [];
  // showList: boolean = false;

  constructor(private film: StarFilmProvider,
              private router: Router,
              private data: DataProvider) {
  }

  ngOnInit() {
    this.getFilm();
  }

  getFilm() {
    this.film.getTitle().subscribe(res => {
      this.resultName = res.body;
      for (let i = 0; i < this.resultName['results'].length; i++) {
        this.peopleName = this.resultName['results'][i].title;
        this.contentFilms.push(this.peopleName);
      }
      this.tempData = [...this.contentFilms];
    });
  }

  // updateFilter(event) {
  //   const val = event.target.value.toLowerCase();
  //   this.contentFilms = this.tempData.filter(function (d) {
  //     let result = '';
  //     for (const keys in d) {
  //       result += d[keys];
  //     }
  //     if (result.toLowerCase().indexOf(val) !== -1) {
  //       this.listFilm.push(result);
  //       this.showList = true;
  //     } else {
  //       this.showList = false;
  //     }
  //     console.log(this.listFilm);
  //   });
  // }

  detailFilm(e) {
    let url;
    for (let i = 0; i < this.resultName['results'].length; i++) {
      if (this.resultName['results'][i].title === e) {
        url = (this.resultName['results'][i].url).slice(0, -1);
      }
    }
    this.film.getUrl(url).subscribe(res => {
      this.dataSubmit = res.body;
      this.data.storage = this.dataSubmit;

      this.router.navigate(['detail']);
    });
  }
}
