import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { RoomsComponent } from './components/rooms/rooms';
import { GalleryComponent } from './components/gallery/gallery';
import { AmenitiesComponent } from './components/amenities/amenities';
import { MapComponent } from './components/map/map';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    RoomsComponent,
    GalleryComponent,
    AmenitiesComponent,
    MapComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    
    <main class="main-content-wrapper">
      <router-outlet></router-outlet>
      <app-hero></app-hero>
      <app-rooms></app-rooms>
      <app-gallery></app-gallery>
      <app-amenities></app-amenities>
      <app-map></app-map>
      <app-footer></app-footer>
    </main>
  `,
  styles: [`
    .main-content-wrapper {
      padding-bottom: 80px; // Padding for mobile bottom nav
    }
  `]
})
export class AppComponent {}
