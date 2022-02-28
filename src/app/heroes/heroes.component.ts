import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../services/heroesService.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {

  heroes = [];
  heroName: string = "";
  headerTitle = 'Super Heroes';
  hero;
  constructor(private heroService: HeroService, private router: Router,) {}

  ngOnInit(): void{
    // this.heroService.getCharacters().subscribe(data => {
    //     console.log(data);
    // });
  }

  findHero(){
    if(!isNaN(+this.heroName)){
      this.heroService.get(+this.heroName).subscribe(data => {
        this.heroes = [data];
      });
    }else{
      this.heroService.findHero(this.heroName).subscribe(data => {
          this.heroes = data.results;
          console.log(this.heroes);
      });
    }
  }

  openDetails(hero){
    this.hero = hero;
    console.log(this.hero);
    this.headerTitle = hero.name;
    this.router.navigate(['/hero-detail'], {queryParams: {heroId: JSON.stringify(this.hero.id)}});
  }
}
