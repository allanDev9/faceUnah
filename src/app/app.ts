import { Component, signal } from '@angular/core';
import { NavBar } from './components/layouts/nav-bar/nav-bar';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('faceUnah');
}
