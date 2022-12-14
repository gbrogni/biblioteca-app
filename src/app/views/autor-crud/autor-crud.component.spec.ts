import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorCrudComponent } from './autor-crud.component';

describe('AutorCrudComponent', () => {
  let component: AutorCrudComponent;
  let fixture: ComponentFixture<AutorCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
