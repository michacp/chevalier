import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  images = [
    { path: 'img/carrucel/1.jpg',titleKey:"CAROUSEL.SLIDE1.TITLE", descriptionKey: 'CAROUSEL.SLIDE1.DESCRIPTION' },
    { path: 'img/carrucel/2.jpg',titleKey:"CAROUSEL.SLIDE2.TITLE", descriptionKey: 'CAROUSEL.SLIDE2.DESCRIPTION' },
    { path: 'img/carrucel/3.jpg',titleKey:"CAROUSEL.SLIDE3.TITLE", descriptionKey: 'CAROUSEL.SLIDE3.DESCRIPTION' }
  ];
  services = [
    {
      name: 'SERVICES.GENERAL_CUT',
      price: 'SERVICES.PRICE_4',
      description: 'SERVICES.GENERAL_CUT_DESC',
      image: 'img/services/general_cut.jpg'
    },
    {
      name: 'SERVICES.BLADE_SHADE',
      price: 'SERVICES.PRICE_5',
      description: 'SERVICES.BLADE_SHADE_DESC',
      image: 'img/services/blade_shade.jpg'
    },
    {
      name: 'SERVICES.BEARD_TRIM',
      price: 'SERVICES.PRICE_5',
      description: 'SERVICES.BEARD_TRIM_DESC',
      image: 'img/services/beard_trim.jpg'
    },
    {
      name: 'SERVICES.FACIAL_CLEANSE',
      price: 'SERVICES.PRICE_10',
      description: 'SERVICES.FACIAL_CLEANSE_DESC',
      image: 'img/services/facial_cleanse.jpg'
    },
    {
      name: 'SERVICES.TRIBAL_DESIGN',
      price: 'SERVICES.PRICE_8',
      description: 'SERVICES.TRIBAL_DESIGN_DESC',
      image: 'img/services/tribal_design.jpg'
    },
    {
      name: 'SERVICES.BEARD_SHADE',
      price: 'SERVICES.PRICE_3',
      description: 'SERVICES.BEARD_SHADE_DESC',
      image: 'img/services/beard_shade.jpg' 
    },
    {
      name: 'SERVICES.BLACK_MASK',
      price: 'SERVICES.PRICE_5',
      description: 'SERVICES.BLACK_MASK_DESC',
      image: 'img/services/black_mask.jpg'
    },
    {
      name: 'SERVICES.HAIR_DYE',
      price: 'SERVICES.PRICE_30_40',
      description: 'SERVICES.HAIR_DYE_DESC',
      image: 'img/services/hair_dye.jpg'
    },
    {
      name: 'SERVICES.HIGHLIGHTS',
      price: 'SERVICES.PRICE_10_25',
      description: 'SERVICES.HIGHLIGHTS_DESC',
      image: 'img/services/highlights.jpg'
    }
  ];
  products = [
    {
      name: 'PRODUCTS.HAIR_GEL',
      price: 10.99,
      description: 'PRODUCTS.HAIR_GEL_DESCRIPTION',
      image: 'img/products/styling-wax.jpg'
    },
    {
      name: 'PRODUCTS.SHAVING_CREAM',
      price: 8.99,
      description: 'PRODUCTS.SHAVING_CREAM_DESCRIPTION',
      image: 'img/products/toppik-black.jpg'
    },
    {
      name: 'PRODUCTS.BEARD_OIL',
      price: 12.99,
      description: 'PRODUCTS.BEARD_OIL_DESCRIPTION',
      image: 'img/products/shampoo-2-in-1-ossion.jpg'
    }
  ];
  experienceTitleKey = 'EXPERIENCE.TITLE';
  experienceDescriptionKey = 'EXPERIENCE.DESCRIPTION';

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
 
  }
 
}
