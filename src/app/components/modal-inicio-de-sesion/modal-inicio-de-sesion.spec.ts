import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInicioDeSesion } from './modal-inicio-de-sesion';

describe('ModalInicioDeSesion', () => {
  let component: ModalInicioDeSesion;
  let fixture: ComponentFixture<ModalInicioDeSesion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalInicioDeSesion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInicioDeSesion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
