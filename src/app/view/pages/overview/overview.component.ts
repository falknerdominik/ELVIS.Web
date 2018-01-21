import { Component, OnInit } from '@angular/core';
import { ResultService, AreaService } from '../../../library/api/index';
import { SettingsService } from '../../../library/services/settings-service.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  area: any;
  areaType: string = 'federal';
  election: any;

  chart: any = {
  "caption": "Gesamt",
  "numberprefix": "",
  "theme": "fint"
  };

  constructor(
    private resultService: ResultService, 
    private settingsService: SettingsService,
    private areaService: AreaService
  ) { 
    this.election = settingsService.getSelectedElection();
    this.area = this.areaService.federalByAreaId(this.election.Id, 'G00000');
  }

  ngOnInit() {
  }

}
