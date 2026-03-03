import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero is-fullheight-with-navbar" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('images/557638703.jpg') center/cover no-repeat;">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="subtitle is-6 has-text-white mb-4" style="text-transform: uppercase; letter-spacing: 0.4em;">{{ lang.t().hero.welcome }}</p>
          <h1 class="title is-1 has-text-white serif-font mb-6 hero-text-white" style="font-size: 4.5rem;">{{ lang.t().hero.title }}</h1>
          <p class="subtitle is-4 has-text-white mb-6 hero-text-white">{{ lang.t().hero.subtitle }}</p>
          
          <div class="mt-6">
            <a [href]="bookingUrl" 
               target="_blank" 
               class="button is-white is-rounded is-large px-6" 
               style="font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.1em; border: none; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
               {{ lang.t().hero.book }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent {
  lang = inject(LanguageService);
  
  bookingUrl = "https://www.booking.com/hotel/ua/all-eyes-hostel-kam-39-ianets-podils-kii.uk.html?aid=1188619&label=69a7448de673b0572239e4ac&sid=4bc1aa45a2fb8086a2cad384b3e3b0ee&checkin=2026-03-31&checkout=2026-04-29&dest_id=-1040849&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=2&req_adults=2&req_children=0&room1=A&room2=A&sb_price_type=total&soh=1&sr_order=popularity&srepoch=1772570151&srpvid=5af390bd482203da&type=total&ucfs=1#availability";
}
