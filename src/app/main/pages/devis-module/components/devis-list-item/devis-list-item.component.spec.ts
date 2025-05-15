import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisListItemComponent } from './devis-list-item.component';

describe('DevisListItemComponent', () => {
  let component: DevisListItemComponent;
  let fixture: ComponentFixture<DevisListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevisListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
