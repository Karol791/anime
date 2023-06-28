import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../data-storage.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy{
  constructor(private http: HttpClient, private dsService: DataStorageService) {}
  subscription: Subscription;
  rdmAnime;

  ngOnInit(): void {
    this.subscription = this.dsService.fetchRandomAnime().subscribe(response => {
      this.rdmAnime = response;
      console.log(this.rdmAnime);
    })
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
