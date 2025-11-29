import { Component, signal } from '@angular/core';
import { NavBar } from './components/layouts/nav-bar/nav-bar';
import { RouterOutlet } from '@angular/router';
import { BienvenidaLogoFaceUnah } from './components/layouts/bienvenida-logo-face-unah/bienvenida-logo-face-unah';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, BienvenidaLogoFaceUnah],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('faceUnah');
  showSplash = true;

  ngOnInit() {
    setTimeout(() => {
      this.showSplash = false;
    }, 1000);
  }
  protected get isHomePage(): boolean {
    return window.location.pathname === '/home';
  }
}
