import { Component, OnInit, OnDestroy, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-amigos.page',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.css'],
})
export class AmigosPage implements OnInit, OnDestroy {
  @ViewChildren('amigoCard') amigoCards!: QueryList<ElementRef>;

  amigos: any[] = [];
  private imageObserver: IntersectionObserver | null = null;
  private cardObserver: IntersectionObserver | null = null;

  constructor() {}

  ngOnInit() {
    this.cargarAmigos();
    this.inicializarIntersectionObservers();
  }

  private cargarAmigos() {
    this.amigos = [
      { nombre: 'Juan', edad: 25, foto: 'assets/juan.jpg' },
      { nombre: 'María', edad: 30, foto: 'assets/maria.jpg' },
      { nombre: 'Pedro', edad: 28, foto: 'assets/pedro.jpg' },
      { nombre: 'Ana', edad: 26, foto: 'assets/ana.jpg' },
      { nombre: 'Luis', edad: 32, foto: 'assets/luis.jpg' },
      { nombre: 'Sofia', edad: 27, foto: 'assets/sofia.jpg' },
    ];
  }

  private inicializarIntersectionObservers() {
    // Observer para lazy loading de imágenes
    const imageOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1,
    };

    this.imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.classList.add('loaded');
            this.imageObserver?.unobserve(entry.target);
          }
        }
      });
    }, imageOptions);

    // Observer para animar tarjetas al entrar en vista
    const cardOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    this.cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          this.cardObserver?.unobserve(entry.target);
        }
      });
    }, cardOptions);

    // Aplicar observers después de renderizar
    setTimeout(() => {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach((img) => this.imageObserver?.observe(img));

      const cards = document.querySelectorAll('.bg-gray-900.rounded-xl');
      cards.forEach((card) => this.cardObserver?.observe(card));
    }, 100);
  }

  ngOnDestroy() {
    this.imageObserver?.disconnect();
    this.cardObserver?.disconnect();
  }
}
