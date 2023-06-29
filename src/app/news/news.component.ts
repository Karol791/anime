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
  rdmAnime = [];
  error = null;

  ngOnInit(): void {
    this.subscription = this.dsService.fetchRandomAnime().subscribe(response => {
      this.rdmAnime = response;
    }, error => {
      this.error = error.error.message;
    })
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
