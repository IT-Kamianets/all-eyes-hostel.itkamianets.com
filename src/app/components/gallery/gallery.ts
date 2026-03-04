import { Component, signal, HostListener } from '@angular/core';
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
          <div class="column is-4" *ngFor="let img of galleryImages; let i = index">
            <div class="gallery-item" (click)="openLightbox(i)">
              <div class="gallery-img-wrapper shadow-sm">
                <img [src]="img" alt="All Eyes Hostel" loading="lazy">
              </div>
              <div class="gallery-overlay">
                <i class="fas fa-expand"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Premium Lightbox Modal -->
    <div class="premium-modal" [class.is-active]="selectedImageIndex() !== null">
      <div class="modal-bg-blur" (click)="closeLightbox()"></div>
      
      <div class="modal-interface">
        <button class="modal-action-btn close-btn" (click)="closeLightbox()">
          <i class="fas fa-times"></i>
        </button>

        <div class="main-stage">
          <button class="nav-btn prev-btn" (click)="prevImage($event)">
            <i class="fas fa-chevron-left"></i>
          </button>
          
          <div class="image-container" (click)="$event.stopPropagation()">
            <img *ngIf="selectedImageIndex() !== null" 
                 [src]="galleryImages[selectedImageIndex()!]" 
                 alt="Gallery full view" 
                 class="main-img">
            <div class="img-counter">{{ (selectedImageIndex() || 0) + 1 }} / {{ galleryImages.length }}</div>
          </div>
          
          <button class="nav-btn next-btn" (click)="nextImage($event)">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .gallery-item {
      position: relative;
      cursor: pointer;
      overflow: hidden;
      border-radius: 12px;
      aspect-ratio: 4/3;
    }
    
    .gallery-img-wrapper {
      width: 100%;
      height: 100%;
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    
    .gallery-img-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .gallery-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(15, 23, 42, 0.4);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      color: white;
      font-size: 1.5rem;
    }

    .gallery-item:hover .gallery-overlay { opacity: 1; }
    .gallery-item:hover .gallery-img-wrapper { transform: scale(1.05); }

    /* --- PREMIUM MODAL --- */
    .premium-modal {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      z-index: 3000;
      display: none;
      justify-content: center;
      align-items: center;
    }

    .premium-modal.is-active { display: flex; }

    .modal-bg-blur {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(10, 15, 25, 0.9);
      backdrop-filter: blur(10px);
    }

    .modal-interface {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 2rem;
    }

    .close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
      z-index: 100;
    }

    .main-stage {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }

    .image-container {
      position: relative;
      max-width: 85%;
      max-height: 85vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .main-img {
      max-width: 100%;
      max-height: 80vh;
      object-fit: contain;
      border-radius: 8px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);
      animation: fadeIn 0.3s ease;
    }

    .img-counter {
      color: rgba(255,255,255,0.6);
      margin-top: 1rem;
      font-size: 0.9rem;
      letter-spacing: 0.1em;
    }

    .nav-btn, .modal-action-btn {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      color: white;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      transition: all 0.3s ease;
      backdrop-filter: blur(5px);
    }

    .nav-btn:hover, .modal-action-btn:hover {
      background: rgba(255,255,255,0.15);
      transform: scale(1.1);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }

    @media (max-width: 768px) {
      .modal-interface { padding: 1rem; }
      .main-stage { gap: 0.5rem; }
      .nav-btn { width: 45px; height: 45px; font-size: 1rem; background: rgba(0,0,0,0.3); }
      .image-container { max-width: 100%; }
      .close-btn { top: 1rem; right: 1rem; }
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

  selectedImageIndex = signal<number | null>(null);

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (this.selectedImageIndex() === null) return;
    
    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.prevImage();
    if (event.key === 'Escape') this.closeLightbox();
  }

  openLightbox(index: number) {
    this.selectedImageIndex.set(index);
    document.documentElement.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedImageIndex.set(null);
    document.documentElement.style.overflow = '';
  }

  nextImage(event?: Event) {
    if (event) event.stopPropagation();
    const current = this.selectedImageIndex();
    if (current !== null) {
      this.selectedImageIndex.set((current + 1) % this.galleryImages.length);
    }
  }

  prevImage(event?: Event) {
    if (event) event.stopPropagation();
    const current = this.selectedImageIndex();
    if (current !== null) {
      this.selectedImageIndex.set((current - 1 + this.galleryImages.length) % this.galleryImages.length);
    }
  }
}
