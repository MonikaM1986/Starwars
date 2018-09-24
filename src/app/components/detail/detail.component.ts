import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  data: any = {};
  attributes: any = [];
  titles: any = [];

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.detailFilm();
  }

  detailFilm() {
    this.route.queryParams.subscribe((params) => {
      this.attributes = Object.keys(params);
      for (const items of this.attributes) {
        this.titles.push(items.toUpperCase());
      }
      this.data = params;
      console.log(this.titles);
    });
  }
}
