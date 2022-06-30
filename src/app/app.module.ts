import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContentTileComponent } from './content-tile/content-tile.component';
import { LoginTileComponent } from './login-tile/login-tile.component';
import { TempTileComponent } from './temp-tile/temp-tile.component';
import { TileColumnComponent } from './tile-column/tile-column.component';
import { RainTileComponent } from './rain-tile/rain-tile.component';
import { IndexComponent } from './index/index.component';
import { TempTileListItemComponent } from './temp-tile/temp-tile-list-item/temp-tile-list-item.component';
import { RainTileListItemComponent } from './rain-tile-list-item/rain-tile-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentTileComponent,
    LoginTileComponent,
    TempTileComponent,
    TileColumnComponent,
    RainTileComponent,
    IndexComponent,
    TempTileListItemComponent,
    RainTileListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
