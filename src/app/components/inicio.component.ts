import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CenterComponent } from './center/center.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavbarComponent,CenterComponent,SidebarComponent,FooterComponent,CarouselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
