import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FavoritesPageRoutingModule } from './favorites-routing.module';

import { FavoritesPage } from './favorites.page';
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FavoritesPageRoutingModule,
    BrowserModule
  ],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule {}
