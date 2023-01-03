import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRelationshipsComponent } from './category-relationships.component';

describe('CategoryRelationshipsComponent', () => {
  let component: CategoryRelationshipsComponent;
  let fixture: ComponentFixture<CategoryRelationshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryRelationshipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
