import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorReadComponent } from './autor-read.component';

describe('AutorReadComponent', () => {
  let component: AutorReadComponent;
  let fixture: ComponentFixture<AutorReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
