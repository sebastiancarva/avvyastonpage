import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  showSidebaar = false; // Variable para controlar la visibilidad de la barra lateral

  showSidebar() {
    this.showSidebaar = true;
  }

  // Método para ocultar la barra lateral
  hideSidebar() {
    this.showSidebaar = false;
  }
}
