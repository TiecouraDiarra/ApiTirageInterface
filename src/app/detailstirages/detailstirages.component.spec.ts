import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstiragesComponent } from './detailstirages.component';

describe('DetailstiragesComponent', () => {
  let component: DetailstiragesComponent;
  let fixture: ComponentFixture<DetailstiragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailstiragesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailstiragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
