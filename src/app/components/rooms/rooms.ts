import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="rooms" class="section py-6 bg-neutral">
      <div class="container mt-6">
        <div class="section-title">
            <p>{{ lang.t().hero.welcome }}</p>
            <h2 class="serif-font">{{ lang.t().rooms.title }}</h2>
        </div>
        
        <div class="columns is-multiline is-centered">
          <div class="column is-4" *ngFor="let room of getRooms()">
            <div class="room-card">
              <div class="room-image-container">
                <div class="room-badge" *ngIf="room.badge">{{ room.badge }}</div>
                <div class="room-image" [style.backgroundImage]="'url(' + room.image + ')'"></div>
              </div>
              <div class="room-content">
                <h3 class="title is-4 serif-font mb-2">{{room.name}}</h3>
                <p class="subtitle is-6 mb-4">{{room.desc}}</p>
                <div class="is-flex is-justify-content-space-between is-align-items-center mt-auto">
                   <span class="is-weight-bold" style="color: #3b82f6; font-size: 1.2rem; font-weight: 700;">
                     {{ lang.t().rooms.from }} {{room.price}} ₴
                   </span>
                   <i class="fas fa-chevron-right has-text-grey-light"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class RoomsComponent {
  lang = inject(LanguageService);

  getRooms() {
    const isUA = this.lang.currentLang() === 'ua';
    return [
      { 
        name: isUA ? 'Двомісний номер' : 'Double Room', 
        desc: isUA ? 'Приватність та затишок з двоспальним ліжком.' : 'Privacy and comfort with a double bed.',
        price: '850', 
        image: 'images/563126258.jpg',
        badge: isUA ? 'Преміум' : 'Premium'
      },
      { 
        name: isUA ? 'Стандарт (8 ліжок)' : 'Standard (8 Beds)', 
        desc: isUA ? 'Економічне розміщення у просторому номері.' : 'Economical stay in a spacious shared room.',
        price: '350', 
        image: 'images/563126817.jpg',
        badge: isUA ? 'Популярне' : 'Popular'
      },
      { 
        name: isUA ? 'Стандарт (6 ліжок)' : 'Standard (6 Beds)', 
        desc: isUA ? 'Збалансований комфорт для невеликої групи.' : 'Balanced comfort for a small group.',
        price: '400', 
        image: 'images/563126815.jpg'
      },
      { 
        name: isUA ? 'Стандарт (4 ліжка)' : 'Standard (4 Beds)', 
        desc: isUA ? 'Максимальний спокій у загальному номері.' : 'Maximum peace in a shared room.',
        price: '450', 
        image: 'images/563126813.jpg',
        badge: isUA ? 'Затишок' : 'Cozy'
      },
      { 
        name: isUA ? 'Комфорт Соло' : 'Comfort Solo', 
        desc: isUA ? 'Власне ліжко у малому загальному номері.' : 'Single bed in a small shared room.',
        price: '380', 
        image: 'images/563125211.jpg'
      }
    ];
  }
}
