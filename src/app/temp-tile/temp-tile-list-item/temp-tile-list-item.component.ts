import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-tile-list-item',
  templateUrl: './temp-tile-list-item.component.html',
  styleUrls: ['./temp-tile-list-item.component.css']
})
export class TempTileListItemComponent implements OnInit {
  country = ""
  degrees = ""

  constructor() { }

  ngOnInit(): void {
  }

}
