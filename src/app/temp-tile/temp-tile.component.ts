import { Component, OnInit } from '@angular/core';
import { Country } from '../Interfaces';

@Component({
  selector: 'app-temp-tile',
  templateUrl: './temp-tile.component.html',
  styleUrls: ['./temp-tile.component.css']
})
export class TempTileComponent implements OnInit {

  countries:Country[] = [{
    "naam":"France",
    "temp":22
  },
  {
    "naam":"Germany",
    "temp":24
       }]


  constructor() { }

  ngOnInit(): void {
  }

}
