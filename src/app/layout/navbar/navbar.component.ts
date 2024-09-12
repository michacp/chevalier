import { Component , HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = false;
  languages = ['en', 'es'];
  selectedLanguage = 'es';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.selectedLanguage);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  changeLanguage(lang: string) {
    // console.log(event)
    // const selectElement = event.target as HTMLSelectElement; // Convertimos el EventTarget en HTMLSelectElement
    // const language = selectElement.value; // Ahora podemos acceder a la propiedad value
     
    this.translate.use(lang);
  }
}
