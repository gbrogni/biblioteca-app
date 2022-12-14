import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorUpdateComponent } from './autor-update.component';

describe('AutorUpdateComponent', () => {
  let component: AutorUpdateComponent;
  let fixture: ComponentFixture<AutorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
