import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPage } from './favorites/favorites.page';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomePage } from './home/home.page';

const routes: Routes = [
  // {
  //   path: 'home',
  //   // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  //   component: HomePage
  // },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: 'favourites',
    // loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
    component: FavoritesPage
  },
  {
    path: 'heroes',
    // loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
    component: HeroesComponent
  },
  {
    path: 'hero-detail/:id',
    component: HeroDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
