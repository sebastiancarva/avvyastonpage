import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../services/loading.service';
import { CommonModule } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    NzSpinModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  loading = false;
  private readonly router : Router = inject(Router)
  redirecTracks(){
    this.router.navigate(['/inicio/Tracks'])
  }
  redirecHome(){
    this.router.navigate(['/inicio/inicio'])
  }
  constructor(private loadingService: LoadingService) { }
  ngOnInit(): void {
    this.loadingService.loading$.subscribe(loading => this.loading = loading);
  }

}
