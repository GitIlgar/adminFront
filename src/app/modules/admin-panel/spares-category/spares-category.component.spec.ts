import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparesCategoryComponent } from './spares-category.component';

describe('SparesCategoryComponent', () => {
  let component: SparesCategoryComponent;
  let fixture: ComponentFixture<SparesCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparesCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
