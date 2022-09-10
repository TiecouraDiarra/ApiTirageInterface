import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailslistesComponent } from './detailslistes.component';

describe('DetailslistesComponent', () => {
  let component: DetailslistesComponent;
  let fixture: ComponentFixture<DetailslistesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailslistesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailslistesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
