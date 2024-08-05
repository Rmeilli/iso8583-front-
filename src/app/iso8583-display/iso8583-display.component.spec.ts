import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso8583DisplayComponent } from './iso8583-display.component';

describe('Iso8583DisplayComponent', () => {
  let component: Iso8583DisplayComponent;
  let fixture: ComponentFixture<Iso8583DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iso8583DisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Iso8583DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
