import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegristroLibrosComponent } from './regristro-libros.component';

describe('RegristroLibrosComponent', () => {
  let component: RegristroLibrosComponent;
  let fixture: ComponentFixture<RegristroLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegristroLibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegristroLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
