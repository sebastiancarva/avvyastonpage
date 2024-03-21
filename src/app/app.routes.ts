import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'inicio',
    loadChildren:() => import('./components/inicio.routing').then((r)=>r.routesDash)
  }
];
