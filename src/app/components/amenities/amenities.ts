import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-amenities',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="amenities" class="section py-6">
      <div class="container">
        <h2 class="section-title title is-2 serif-font">{{ lang.t().amenities.title }}</h2>
        
        <div class="columns is-multiline">
          <div class="column is-4" *ngFor="let group of getGroups()">
            <div class="has-text-centered p-5">
              <i [class]="group.icon" class="fa-3x mb-4" style="color: #3b82f6;"></i>
              <h3 class="title is-4 serif-font mb-4">{{group.title}}</h3>
              <ul style="list-style: none; padding: 0;">
                <li *ngFor="let item of group.items" class="mb-2 opacity-70">{{item}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .opacity-70 { opacity: 0.7; }
  `]
})
export class AmenitiesComponent {
  lang = inject(LanguageService);

  getGroups() {
    const isUA = this.lang.currentLang() === 'ua';
    return [
      {
        title: isUA ? 'Комфорт' : 'Comfort',
        icon: 'fas fa-wind',
        items: isUA ? ['Кондиціонер', 'Безкоштовний Wi-Fi', 'Опалення'] : ['A/C', 'Free Wi-Fi', 'Heating']
      },
      {
        title: isUA ? 'Ванна' : 'Bathroom',
        icon: 'fas fa-soap',
        items: isUA ? ['Фен', 'Спільна ванна', 'Рушники'] : ['Hairdryer', 'Shared Bath', 'Towels']
      },
      {
        title: isUA ? 'Кухня' : 'Kitchen',
        icon: 'fas fa-mug-hot',
        items: isUA ? ['Спільна кухня', 'Зона відпочинку', 'Шафки'] : ['Shared Kitchen', 'Lounge Area', 'Lockers']
      }
    ];
  }
}
