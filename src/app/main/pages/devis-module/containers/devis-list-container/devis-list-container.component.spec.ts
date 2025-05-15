import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisListContainerComponent } from './devis-list-container.component';

describe('DevisListContainerComponent', () => {
  let component: DevisListContainerComponent;
  let fixture: ComponentFixture<DevisListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisListContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevisListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
