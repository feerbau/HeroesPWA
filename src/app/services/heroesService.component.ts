import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService {
    public baseUrl: string;
    //   public apiKey = '179d6995cdefd880aff5568a0e80727a'; // MARVEL
    public apiKey = '10226363248884169'; // SuperHeroAPI

    public constructor(private http: HttpClient) {
        // this.baseUrl = 'https://gateway.marvel.com/v1/public/';
        this.baseUrl = 'https://superheroapi.com/api.php/' + this.apiKey + '/';
    }

  // eslint-disable-next-line @typescript-eslint/ban-types
    public getCharacters(): Observable<any> {
        // return this.http.get(this.baseUrl + 'characters' + this.getApiKey());
        return this.http.get(this.baseUrl );
    }


//   private getApiKey(): string {
//     return '?apikey='+ this.apiKey;
//   }
  public get(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }

    public findHero(name: string): Observable<any> {
      return this.http.get(this.baseUrl + 'search/' + name);
    }

    public getHero(id: number): Observable<any> {
      return this.http.get(this.baseUrl + id);
    }
}
