import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/databaseService.component';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.page.html',
  providers: [DatabaseService]
})
export class FavoritesPage implements OnInit {

  totalHeroes = 0;
  heroes: any;
  
  constructor(private databaseService: DatabaseService) {
    this.databaseService = new DatabaseService();
   }

  ngOnInit() {
    this.databaseService.getAll().then((docs) => {
      console.log(docs)
      this.totalHeroes = docs.length;
      this.heroes = docs;
      // console.log(this.heroes);
    });
    
    // .subscribe(res => {
    //   console.log(res);
    // });
  }

  removeFromFavorites(id: number){
    this.databaseService.removeFromFavorites(id.toString());
    this.heroes = this.heroes.filter(hero => {return hero._id != id});
    
  }
}
