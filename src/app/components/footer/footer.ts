import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer py-6" style="background: #0f172a; color: white;">
      <div class="container">
        <!-- Main Footer Links Section -->
        <div class="columns is-multiline">
          <!-- About -->
          <div class="column is-6">
            <h3 class="title is-4 serif-font has-text-white mb-4">All Eyes Hostel</h3>
            <p class="has-text-grey-light mb-4" style="line-height: 1.8; max-width: 450px;">
              {{ lang.t().footer.about }}
            </p>
          </div>
          
          <!-- Navigation (Redesigned) -->
          <div class="column is-6 has-text-right-tablet">
            <h4 class="title is-5 serif-font has-text-white mb-4">{{ lang.t().footer.nav }}</h4>
            <div class="footer-nav is-flex is-flex-direction-column">
              <a href="#hero" class="has-text-white-bis mb-2 is-block hover-accent">{{ lang.t().nav.home }}</a>
              <a href="#rooms" class="has-text-white-bis mb-2 is-block hover-accent">{{ lang.t().nav.rooms }}</a>
              <a href="#amenities" class="has-text-white-bis mb-2 is-block hover-accent">{{ lang.t().nav.amenities }}</a>
              <a href="#map" class="has-text-white-bis mb-2 is-block hover-accent">{{ lang.t().nav.map }}</a>
            </div>
          </div>
        </div>

        <hr style="background-color: rgba(255,255,255,0.05); margin: 3rem 0;">

        <!-- Bottom Attribution -->
        <div class="has-text-centered">
          <div class="is-flex is-align-items-center is-justify-content-center mb-4">
            <a href="https://github.com/IT-Kamianets/all-eyes-hostel.itkamianets.com" target="_blank" class="has-text-white hover-accent mr-3">
              <i class="fab fa-github fa-lg"></i>
            </a>
            <span class="has-text-grey-light is-size-7" style="text-transform: uppercase; letter-spacing: 0.1em;">Designed by Anatoliy</span>
          </div>

          <div class="has-text-grey-light" style="font-size: 0.7rem; letter-spacing: 0.2em; opacity: 0.6; text-transform: uppercase;">
            &copy; 2026 ALL EYES HOSTEL. {{ lang.t().footer.copyright }}
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .hover-accent:hover { 
      opacity: 0.7; 
      color: #3b82f6 !important; 
      transition: all 0.3s;
    }
  `]
})
export class FooterComponent {
  lang = inject(LanguageService);
}
