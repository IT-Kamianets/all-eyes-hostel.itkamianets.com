import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero';
import { RoomsComponent } from './components/rooms/rooms';
import { GalleryComponent } from './components/gallery/gallery';
import { AmenitiesComponent } from './components/amenities/amenities';
import { MapComponent } from './components/map/map';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    RoomsComponent,
    GalleryComponent,
    AmenitiesComponent,
    MapComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-rooms></app-rooms>
    <app-gallery></app-gallery>
    <app-amenities></app-amenities>
    <app-map></app-map>
  `
})
export class HomeComponent {}
