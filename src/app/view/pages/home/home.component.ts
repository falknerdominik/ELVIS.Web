import { Component, OnInit } from '@angular/core';
import {AreaService, ElectionService} from '../../../library/api';
import { MenuComponent } from '../../components/menu/menu.component';
import { SettingsService } from '../../../library/services/settings-service.service';

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

  constructor(areaService: AreaService, private settingsService: SettingsService) { 
    const election = settingsService.getSelectedElection();
    const areaId = this.settingsService.getUserDefinedCommunity();
    if(areaId != null) {
      this.area = areaService.communityByAreaId(election.Id, areaId)
    } else {
      this.area = areaService.community(1);
    }
    this.area.subscribe(
      a => this.chart.caption = `Stimmenverteilung ${a.Name}`
    );
  }

  ngOnInit() { }
}
