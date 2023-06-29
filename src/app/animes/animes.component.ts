import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  animes = [];
  error = null;
  
  constructor(private dataStorage: DataStorageService) {}

  ngOnInit(): void {
      this.subscription = this.dataStorage.fetchAnimes().subscribe(reponse => {
        this.animes = reponse;
      }, error => {
        this.error = error.error.message;
      })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  fetchData(){
    this.subscription = this.dataStorage.fetchAnimes().subscribe(reponse => {
      this.animes = reponse;
    }, error => {
      this.error = error.error.message;
    })
  }
}
