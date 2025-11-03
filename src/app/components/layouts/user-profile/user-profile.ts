import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../../Services/users/users.service';
import { ModalInicioDeSesion } from '../../modal-inicio-de-sesion/modal-inicio-de-sesion';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-profile',
  imports: [MatIconModule, CommonModule, ModalInicioDeSesion],
  templateUrl: './user-profile.html',
  styleUrls: ['./user-profile.css'],
})
export class UserProfile implements OnInit {
  constructor(private usersService: UsersService) {}

  username: string = '';

  ngOnInit() {
    this.username = this.usersService.getUsername();
  }

  Logout(): void {
    this.usersService.Logout();
    this.updateUsername('');
  }

  showLoginModal: boolean = false;

  updateUsername(newUsername: string): void {
    this.username = newUsername;
  }

  openLoginModal(): void {
    this.showLoginModal = true;
  }
  onModalClose(): void {
    this.showLoginModal = false;
  }

  handleLogin(loginData: User): void {
    console.log('Datos de inicio de sesión recibidos:', loginData);
    this.usersService.setUsername(loginData.username);
    this.updateUsername(loginData.username);
    this.onModalClose();
  }
}
