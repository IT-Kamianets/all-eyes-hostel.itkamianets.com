import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'ua' | 'en';

const TRANSLATIONS: Record<Lang, any> = {
  ua: {
    nav: { home: 'Головна', rooms: 'Розміщення', amenities: 'Послуги', map: 'Контакти' },
    hero: { welcome: 'Ласкаво просимо до Кам\'янця', title: 'All Eyes Hostel', subtitle: 'Відчуйте затишок у самому центрі старого міста', book: 'ЗАБРОНЮВАТИ ЗАРАЗ' },
    rooms: { title: 'Пропозиції проживання', from: 'від' },
    amenities: { title: 'Послуги та Сервіси' },
    map: { title: 'Наше розташування', contacts: 'Контакти', address: 'АДРЕСА', phone: 'ТЕЛЕФОН', email: 'EMAIL', route: 'ПРОКЛАСТИ МАРШРУТ' },
    footer: { about: 'Преміальний комфорт у самому серці Кам\'янця-Подільського. Місце, де історія зустрічається з сучасним сервісом.', nav: 'ШВИДКІ ПОСИЛАННЯ', copyright: 'ВСІ ПРАВА ЗАХИЩЕНІ.' }
  },
  en: {
    nav: { home: 'Home', rooms: 'Rooms', amenities: 'Amenities', map: 'Contacts' },
    hero: { welcome: 'Welcome to Kamianets', title: 'All Eyes Hostel', subtitle: 'Experience comfort in the heart of the Old Town', book: 'BOOK NOW' },
    rooms: { title: 'Accommodation Offers', from: 'from' },
    amenities: { title: 'Amenities & Services' },
    map: { title: 'Our Location', contacts: 'Contacts', address: 'ADDRESS', phone: 'PHONE', email: 'EMAIL', route: 'GET DIRECTIONS' },
    footer: { about: 'Premium comfort in the heart of Kamianets-Podilskyi. A place where history meets modern service.', nav: 'QUICK LINKS', copyright: 'ALL RIGHTS RESERVED.' }
  }
};

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private _lang = signal<Lang>('ua');
  currentLang = computed(() => this._lang());
  t = computed(() => TRANSLATIONS[this._lang()]);

  toggleLang() {
    this._lang.set(this._lang() === 'ua' ? 'en' : 'ua');
  }
}
