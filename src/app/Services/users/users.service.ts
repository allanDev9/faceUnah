import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _username: string = '';

  constructor() {}

  getUsername(): string {
    return this._username;
  }

  setUsername(username: string): void {
    this._username = username;
  }

  Logout(): string {
    this._username = '';
    console.log('Usuario deslogueado');
    return this._username;
  }
}
