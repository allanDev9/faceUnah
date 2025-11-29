import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidaLogoFaceUnah } from './bienvenida-logo-face-unah';

describe('BienvenidaLogoFaceUnah', () => {
  let component: BienvenidaLogoFaceUnah;
  let fixture: ComponentFixture<BienvenidaLogoFaceUnah>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienvenidaLogoFaceUnah]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienvenidaLogoFaceUnah);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
