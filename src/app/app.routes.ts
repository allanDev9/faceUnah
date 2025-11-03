import { Routes } from '@angular/router';
import { HomePage } from './components/pages/home-page/home-page';
import { AmigosPage } from './components/pages/amigos.page/amigos.page';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'friends', component: AmigosPage },
  { path: '**', redirectTo: '/home' },
];
