import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    
    constructor(private http: HttpClient) {}
    
    fetchAnimes(){
        return this.http.get('https://api.jikan.moe/v4/anime').pipe(
            map(  
              response => {
                const chuj = []
                for(let key in response){
                  chuj.push(response[key]);
                }
                return chuj[1];
              }
            )
          )
    }
    fetchCharacters(){
    return this.http.get('https://api.jikan.moe/v4/characters').pipe(
    map(reponse => {
      const characters = [];
      for(const key in reponse){
        characters.push(reponse[key]);
      }
      return characters[1];
    })
  )
    }

    fetchRandomAnime() {
      return this.http.get('https://api.jikan.moe/v4/random/anime').pipe(
        map(reponse => {
          const anime = [];
          for(const key in reponse){
            anime.push( {...reponse[key]});
          }
          return anime;
        })
      )
    }
}