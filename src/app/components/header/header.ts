import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="hotel-header">
      <div class="container is-flex is-justify-content-space-between is-align-items-center px-4">
        <!-- Logo - Always White -->
        <div class="is-flex is-align-items-center">
           <h1 class="title is-4 serif-font mb-0 logo-text" style="text-transform: uppercase; letter-spacing: 0.1em; cursor: default;">
            All Eyes Hostel
           </h1>
        </div>

        <!-- Desktop Nav -->
        <nav class="is-hidden-mobile is-flex is-align-items-center">
          <a href="#hero" class="nav-link">{{ lang.t().nav.home }}</a>
          <a href="#rooms" class="nav-link">{{ lang.t().nav.rooms }}</a>
          <a href="#amenities" class="nav-link">{{ lang.t().nav.amenities }}</a>
          <a href="#map" class="nav-link">{{ lang.t().nav.map }}</a>
        </nav>

        <!-- Controls -->
        <div class="is-flex is-align-items-center">
          <span class="lang-toggle mx-3" (click)="lang.toggleLang()" style="font-weight: 600; font-size: 0.8rem;">
            {{ lang.currentLang() === 'ua' ? 'EN' : 'UA' }}
          </span>
          <span class="theme-toggle" (click)="theme.toggleTheme()">
            <i class="fas" [class.fa-moon]="!theme.isDark()" [class.fa-sun]="theme.isDark()"></i>
          </span>
        </div>
      </div>
    </header>

    <!-- Mobile Bottom Nav -->
    <nav class="hotel-bottom-nav is-hidden-tablet">
      <a href="#hero" class="nav-item">
        <i class="fas fa-house"></i>
        <span>{{ lang.t().nav.home }}</span>
      </a>
      <a href="#rooms" class="nav-item">
        <i class="fas fa-bed"></i>
        <span>{{ lang.t().nav.rooms }}</span>
      </a>
      <a href="#amenities" class="nav-item">
        <i class="fas fa-concierge-bell"></i>
        <span>{{ lang.t().nav.amenities }}</span>
      </a>
      <a href="#map" class="nav-item">
        <i class="fas fa-location-dot"></i>
        <span>{{ lang.t().nav.map }}</span>
      </a>
    </nav>
  `,
  styles: []
})
export class HeaderComponent {
  lang = inject(LanguageService);
  theme = inject(ThemeService);
}
