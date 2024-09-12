import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  images = [
    { path: 'img/carrucel/1.webp',titleKey:"CAROUSEL.SLIDE1.TITLE", descriptionKey: 'CAROUSEL.SLIDE1.DESCRIPTION' },
    { path: 'img/carrucel/2.webp',titleKey:"CAROUSEL.SLIDE2.TITLE", descriptionKey: 'CAROUSEL.SLIDE2.DESCRIPTION' },
    { path: 'img/carrucel/3.webp',titleKey:"CAROUSEL.SLIDE3.TITLE", descriptionKey: 'CAROUSEL.SLIDE3.DESCRIPTION' }
  ];
  services = [
    {
      name: 'SERVICES.GENERAL_CUT',
      price: 'SERVICES.PRICE_4',
      description: 'SERVICES.GENERAL_CUT_DESC',
      image: 'img/services/general_cut.webp'
    },
    {
      name: 'SERVICES.BLADE_SHADE',
      price: 'SERVICES.PRICE_5',
      description: 'SERVICES.BLADE_SHADE_DESC',
      image: 'img/services/blade_shade.webp'
    },
    {
      name: 'SERVICES.BEARD_TRIM',
      price: 'SERVICES.PRICE_5',
      description: 'SERVICES.BEARD_TRIM_DESC',
      image: 'img/services/beard_trim.webp'
    },
    {
      name: 'SERVICES.FACIAL_CLEANSE',
      price: 'SERVICES.PRICE_10',
      description: 'SERVICES.FACIAL_CLEANSE_DESC',
      image: 'img/services/facial_cleanse.webp'
    },
    {
      name: 'SERVICES.TRIBAL_DESIGN',
      price: 'SERVICES.PRICE_8',
      description: 'SERVICES.TRIBAL_DESIGN_DESC',
      image: 'img/services/tribal_design.webp'
    },
    {
      name: 'SERVICES.BEARD_SHADE',
      price: 'SERVICES.PRICE_3',
      description: 'SERVICES.BEARD_SHADE_DESC',
      image: 'img/services/beard_shade.webp' 
    },
    {
      name: 'SERVICES.BLACK_MASK',
      price: 'SERVICES.PRICE_5',
      description: 'SERVICES.BLACK_MASK_DESC',
      image: 'img/services/black_mask.webp'
    },
    {
      name: 'SERVICES.HAIR_DYE',
      price: 'SERVICES.PRICE_30_40',
      description: 'SERVICES.HAIR_DYE_DESC',
      image: 'img/services/hair_dye.webp'
    },
    {
      name: 'SERVICES.HIGHLIGHTS',
      price: 'SERVICES.PRICE_10_25',
      description: 'SERVICES.HIGHLIGHTS_DESC',
      image: 'img/services/highlights.webp'
    }
  ];
  products = [
    {
      name: 'PRODUCTS.HAIR_GEL',
      price: 10.99,
      description: 'PRODUCTS.HAIR_GEL_DESCRIPTION',
      image: 'img/products/styling-wax.webp'
    },
    {
      name: 'PRODUCTS.SHAVING_CREAM',
      price: 8.99,
      description: 'PRODUCTS.SHAVING_CREAM_DESCRIPTION',
      image: 'img/products/toppik-black.webp'
    },
    {
      name: 'PRODUCTS.BEARD_OIL',
      price: 12.99,
      description: 'PRODUCTS.BEARD_OIL_DESCRIPTION',
      image: 'img/products/shampoo-2-in-1-ossion.webp'
    }
  ];
  experienceTitleKey = 'EXPERIENCE.TITLE';
  experienceDescriptionKey = 'EXPERIENCE.DESCRIPTION';

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
 
  }
 
}
