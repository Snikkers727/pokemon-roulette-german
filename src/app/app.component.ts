import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pokemon-roulette';

  constructor(private translate: TranslateService) {
    const validLangs = ['en', 'fr', 'es', 'de'];
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('language');
    const savedLanguage = (langParam && validLangs.includes(langParam))
      ? langParam
      : (localStorage.getItem('language') || 'de');
    this.translate.addLangs(validLangs);
    this.translate.setDefaultLang('de');
    this.translate.use(savedLanguage);
    if (langParam && validLangs.includes(langParam)) {
      localStorage.setItem('language', langParam);
    }
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
}
