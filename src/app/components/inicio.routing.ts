import { Routes } from "@angular/router";
import { CenterComponent } from "./center/center.component";
import { ProductsComponent } from "./products/products.component";
import { ReleasesComponent } from "./releases/releases.component";
import { InicioComponent } from "./inicio.component";

export const routesDash:Routes = [
  {path: 'inicio' , component : InicioComponent},
  {path: 'Tracks', component: ProductsComponent},
  {path: 'Products', component: ProductsComponent},
  {path: 'Releases', component: ReleasesComponent}
]
