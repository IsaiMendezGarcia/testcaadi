import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoMaterialComponent } from './uso-material.component';

describe('UsoMaterialComponent', () => {
  let component: UsoMaterialComponent;
  let fixture: ComponentFixture<UsoMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsoMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsoMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
