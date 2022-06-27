import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempTileListItemComponent } from './temp-tile-list-item.component';

describe('TempTileListItemComponent', () => {
  let component: TempTileListItemComponent;
  let fixture: ComponentFixture<TempTileListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempTileListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempTileListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
