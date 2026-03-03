import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="gallery" class="section py-6">
      <div class="container">
        <h2 class="section-title title is-2 serif-font">Галерея</h2>
        <div class="columns is-multiline">
          <div class="column is-4" *ngFor="let img of galleryImages">
            <div class="gallery-item shadow-sm">
              <img [src]="img" alt="All Eyes Hostel" style="width: 100%; border-radius: 8px; display: block;">
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .gallery-item {
      overflow: hidden;
      border-radius: 8px;
      transition: transform 0.3s ease;
      cursor: pointer;
    }
    .gallery-item:hover {
      transform: scale(1.03);
    }
  `]
})
export class GalleryComponent {
  galleryImages = [
    'images/557353062.jpg',
    'images/557353063.jpg',
    'images/557307435.jpg',
    'images/557307428.jpg',
    'images/511080005.jpg',
    'images/511080001.jpg',
    'images/563126811.jpg',
    'images/563126810.jpg',
    'images/563126808.jpg'
  ];
}
