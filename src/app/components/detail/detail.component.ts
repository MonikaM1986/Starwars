import {Component, OnInit} from '@angular/core';
import {DataProvider} from '../../providers/data/data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  constructor(private data: DataProvider) {
    console.log(this.data);
  }

  ngOnInit() {
    this.detailFilm();
  }

  detailFilm() {
    // for (const data in this.data) {
    //   console.log(data.storage.director);
    // }

  }
}
