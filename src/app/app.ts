import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    
    <main class="main-content-wrapper">
      <router-outlet></router-outlet>
    </main>
    
    <app-footer></app-footer>
  `,
  styles: [`
    .main-content-wrapper {
      padding-bottom: 80px; // Padding for mobile bottom nav
    }
  `]
})
export class AppComponent {}
