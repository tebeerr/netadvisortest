import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisFormContainerComponent } from './devis-form-container.component';

describe('DevisFormContainerComponent', () => {
  let component: DevisFormContainerComponent;
  let fixture: ComponentFixture<DevisFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisFormContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevisFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
