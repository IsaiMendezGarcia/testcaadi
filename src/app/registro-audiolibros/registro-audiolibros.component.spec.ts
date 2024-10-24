import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAudiolibrosComponent } from './registro-audiolibros.component';

describe('RegistroAudiolibrosComponent', () => {
  let component: RegistroAudiolibrosComponent;
  let fixture: ComponentFixture<RegistroAudiolibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroAudiolibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroAudiolibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
