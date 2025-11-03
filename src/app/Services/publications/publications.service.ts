import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PublicationsService {
  private _publications: string[] = ['Publicacion 1', 'Publicacion 2', 'Publicacion 3'];

  constructor() {}

  getPublications(): string[] {
    return this._publications;
  }
}
