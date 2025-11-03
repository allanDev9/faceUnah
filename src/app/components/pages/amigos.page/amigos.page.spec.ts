import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigosPage } from './amigos.page';

describe('AmigosPage', () => {
  let component: AmigosPage;
  let fixture: ComponentFixture<AmigosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmigosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
