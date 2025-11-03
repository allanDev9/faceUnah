import { Component } from '@angular/core';
import { InfoPrincipal } from '../info-principal/info-principal';
import { PublicationsService } from '../../../Services/publications/publications.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [InfoPrincipal, CommonModule],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
})
export class HomePage {
  constructor(private publicationsService: PublicationsService) {}
  getPublications(): string[] {
    return this.publicationsService.getPublications();
  }
}
