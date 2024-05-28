import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThougthComponent } from './list-thougth.component';

describe('ListThougthComponent', () => {
  let component: ListThougthComponent;
  let fixture: ComponentFixture<ListThougthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListThougthComponent]
    });
    fixture = TestBed.createComponent(ListThougthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
