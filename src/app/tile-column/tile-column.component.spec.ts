import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileColumnComponent } from './tile-column.component';

describe('TileColumnComponent', () => {
  let component: TileColumnComponent;
  let fixture: ComponentFixture<TileColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
