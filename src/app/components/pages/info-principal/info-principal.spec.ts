import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPrincipal } from './info-principal';

describe('InfoPrincipal', () => {
  let component: InfoPrincipal;
  let fixture: ComponentFixture<InfoPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPrincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPrincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
