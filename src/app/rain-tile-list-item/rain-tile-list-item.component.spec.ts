import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainTileListItemComponent } from './rain-tile-list-item.component';

describe('RainTileListItemComponent', () => {
  let component: RainTileListItemComponent;
  let fixture: ComponentFixture<RainTileListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainTileListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RainTileListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
