import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDark = signal<boolean>(false);
  isDark = this._isDark.asReadonly();

  constructor() {
    this.checkTime();
    // Re-check every minute
    setInterval(() => this.checkTime(), 60000);

    effect(() => {
      if (this._isDark()) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    });
  }

  private checkTime() {
    const hour = new Date().getHours();
    // 18:00 (Dark), 12:00 (Light) logic as requested
    // If hour >= 18 then Dark. If hour < 12 then Dark (night). 
    // If hour >= 12 and < 18 then Light.
    if (hour >= 18 || hour < 12) {
      this._isDark.set(true);
    } else {
      this._isDark.set(false);
    }
  }

  toggleTheme() {
    this._isDark.set(!this._isDark());
  }
}
