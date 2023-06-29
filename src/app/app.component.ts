import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  allowView = false;
  isLogin = false;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowView = queryParams['allowView'] === '1' ? true : false;
      }
    )
  }
}
