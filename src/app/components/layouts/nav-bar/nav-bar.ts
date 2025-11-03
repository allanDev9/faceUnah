import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { UserProfile } from '../../layouts/user-profile/user-profile';

@Component({
  standalone: true,
  selector: 'app-nav-bar',
  imports: [RouterLink, MatIconModule, UserProfile],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {}
