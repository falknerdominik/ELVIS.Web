import { Component, OnInit } from '@angular/core';
import {AreaService, ElectionService} from '../../../library/api';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  area;
  areaType: string = 'communities'
  chart: any = {
    "caption": `Stimmenverteilung`,
    "numberprefix": "",
    "theme": "fint"
  }

  constructor(areaService: AreaService) { 
    this.area = areaService.community(1);
    this.area.subscribe(
      a => this.chart.caption = `Stimmenverteilung ${a.Name}`
    );
  }

  ngOnInit() { }
}
