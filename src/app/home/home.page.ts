import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HeroService } from '../services/heroesService.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  constructor(){};

  ngOnInit(): void {
      
  }
}
