import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempTileComponent } from './temp-tile.component';

describe('TempTileComponent', () => {
  let component: TempTileComponent;
  let fixture: ComponentFixture<TempTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
