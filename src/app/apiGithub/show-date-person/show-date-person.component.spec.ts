import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDatePersonComponent } from './show-date-person.component';

describe('ShowDatePersonComponent', () => {
  let component: ShowDatePersonComponent;
  let fixture: ComponentFixture<ShowDatePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDatePersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDatePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
