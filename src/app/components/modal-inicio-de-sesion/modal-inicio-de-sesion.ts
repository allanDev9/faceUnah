import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  standalone: true,
  selector: 'app-modal-inicio-de-sesion',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal-inicio-de-sesion.html',
  styleUrl: './modal-inicio-de-sesion.css',
})
export class ModalInicioDeSesion {
  @Input() isOpen: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onLogin = new EventEmitter<User>();

  closeModal(): void {
    this.onClose.emit();
  }
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  confirm(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.onLogin.emit({
        ...formData,
      });
      this.closeModal();
    }
  }
}
