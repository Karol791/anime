import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy{
  constructor(private dataStorageService: DataStorageService) {}
  error = null;
  subscription: Subscription;
  characters = [];
  ngOnInit(): void {
    this.subscription = this.dataStorageService.fetchCharacters().subscribe(response => {
      this.characters = response;
    }, error => {
      this.error = error.error.message;
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
}
}
