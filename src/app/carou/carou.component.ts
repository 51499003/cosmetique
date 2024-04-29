import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-carou',
  templateUrl: './carou.component.html',
  styleUrls: ['./carou.component.css']
})
export class CarouComponent implements OnInit, AfterViewInit {

  @ViewChild('carousel') carouselElement!: ElementRef<any>;
  private carousel!: bootstrap.Carousel;

  carouselItems = [
    '/assets/carousel2.jpg',
    '/assets/carousel3.jpg',
    '/assets/carousel1.jpg',
    '/assets/carousel5.jpg',
    // Ajoutez d'autres éléments si nécessaire
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialiser le carrousel au chargement du composant
    // this.initializeCarousel(); // Commented out for now
  }

  ngAfterViewInit(): void {
    // ngAfterViewInit is a better place to initialize the carousel
    this.initializeCarousel();
  }

  // Méthode pour initialiser le carrousel
  private initializeCarousel() {
    const element = this.carouselElement.nativeElement;
    this.carousel = new bootstrap.Carousel(element, {
      
    });
  }

  // Méthode pour passer à la diapositive précédente
  prevSlide() {
    this.carousel.prev();
  }

  // Méthode pour passer à la diapositive suivante
  nextSlide() {
    this.carousel.next();
  }
}
