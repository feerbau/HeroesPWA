import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/heroesService.component';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'powerstats',
    templateUrl: 'powerstats.component.html',
    providers: [HeroService]
})

export class PowerstatsComponent implements OnInit {

    @Input()
    powerstats: Object;
    
    constructor() { }

    ngOnInit() {    
        console.log(this.powerstats)
    }


}
