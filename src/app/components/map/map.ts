import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="map" class="section py-6 bg-neutral">
      <div class="container">
        <h2 class="section-title title is-2 serif-font">{{ lang.t().map.title }}</h2>
        <div class="columns is-stretch">
          <!-- Map Column -->
          <div class="column is-7">
            <div class="map-container shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.337!2d26.58656!3d48.68213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4733c78a4a900001%3A0x8f8d542a6e50a031!2sAll%20eyes%20hostel!5e0!3m2!1suk!2sua!4v1709400000000!5m2!1suk!2sua" 
                width="100%" 
                height="100%" 
                style="border:0; display: block; border-radius: 8px; flex-grow: 1;" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
          
          <!-- Contacts Column -->
          <div class="column is-5">
            <div class="p-6 room-card is-flex is-flex-direction-column" style="height: 100%;">
              <h3 class="title is-4 serif-font mb-5">{{ lang.t().map.contacts }}</h3>
              
              <div class="mb-5">
                <p class="heading has-text-grey mb-1">{{ lang.t().map.address }}</p>
                <p class="is-size-5">вул. Драгоманова, 12/1<br>Кам'янець-Подільський</p>
              </div>

              <div class="mb-5">
                <p class="heading has-text-grey mb-1">{{ lang.t().map.phone }}</p>
                <p class="is-size-5">
                  <a href="tel:+380971545454" class="hover-blue" style="text-decoration: none;">
                    +380 97 154 5454
                  </a>
                </p>
              </div>

              <div class="mb-5">
                <p class="heading has-text-grey mb-1">{{ lang.t().map.email }}</p>
                <p class="is-size-5">
                  <a href="mailto:alleyeshostel&#64;gmail.com" class="hover-blue" style="text-decoration: none;">
                    alleyeshostel&#64;gmail.com
                  </a>
                </p>
              </div>

              <div class="mt-auto pt-4">
                <a [href]="directionsUrl" 
                   target="_blank" 
                   class="button btn-hotel is-fullwidth is-flex is-align-items-center is-justify-content-center">
                   <i class="fas fa-route mr-2"></i> {{ lang.t().map.route }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .map-container {
      border: 1px solid rgba(0,0,0,0.05);
      padding: 10px;
      background: white;
      border-radius: 12px;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .hover-blue:hover {
      color: #3b82f6 !important;
      transition: color 0.2s ease;
    }
    .is-stretch {
      align-items: stretch;
    }
  `]
})
export class MapComponent {
  lang = inject(LanguageService);
  directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=All+eyes+hostel,+Kam'ianets-Podil's'kyi";
}
