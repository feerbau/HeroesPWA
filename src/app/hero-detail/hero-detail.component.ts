import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/heroesService.component';
import { DatabaseService } from '../services/databaseService.component';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html',
    providers: [HeroService, DatabaseService]
})

export class HeroDetailComponent implements OnInit {

    hero: Hero;
    ready = false;
    isFavourite: boolean = false;
    constructor(private route: ActivatedRoute, private heroService: HeroService, private databaseService: DatabaseService) { 
        this.databaseService = new DatabaseService();
    }

    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.heroService.getHero(id).subscribe(data => {
            this.hero = data;
            console.log(this.hero);
            this.ready = true;
        });
        this.databaseService.getHero(id.toString()).then(ret => {
            if(ret){
                this.isFavourite = true;
            }
        })
    }

    addToFavorites(){
        this.databaseService.addToFavorites(this.hero.id.toString(), this.hero.name);
        this.isFavourite = true
    }

    removeFromFavorites(){
        this.databaseService.removeFromFavorites(this.hero.id.toString());
        this.isFavourite = false;
    }

    share() {
        if (navigator.share) {
            let gender = this.hero.appearance['gender'] == 'male' ? 'His' : 'Her' ;
            navigator.share({
                title: 'Hero',
                text: `Check out ${this.hero.name} on the Hero app! ${gender} race is ${this.hero.appearance['race']}. ${gender} combat power is ${this.hero.powerstats['combat']}`,
                url: window.location.href,
            })
        } else {
            alert(`Not supported !!`);
        }
    }
}
