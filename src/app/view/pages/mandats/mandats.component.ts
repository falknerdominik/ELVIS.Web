import { Component, OnInit } from '@angular/core';
import { MandatsService, AreaService } from '../../../library/api/index';
import { SettingsService } from '../../../library/services/settings-service.service';

@Component({
  selector: 'app-mandats',
  templateUrl: './mandats.component.html',
  styleUrls: ['./mandats.component.css']
})
export class MandatsComponent implements OnInit {

  area: any;
  areaType: string = 'mandats';
  election: any;

  chart: any = {
  "caption": "Mandat Verteilung",
  "numberprefix": "",
  "theme": "fint"
  };

  constructor(
    private resultService: MandatsService, 
    private settingsService: SettingsService,
    private areaService: AreaService
  ) { 
    this.election = settingsService.getSelectedElection();
    this.area = this.areaService.federalByAreaId(this.election.Id, 'G00000');
  }
  ngOnInit() {
  }

}
