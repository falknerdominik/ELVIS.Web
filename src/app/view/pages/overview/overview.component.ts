import { Component, OnInit } from '@angular/core';
import { ResultService, AreaService } from '../../../library/api/index';
import { SettingsService } from '../../../library/services/settings-service.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  data: any[];
  election: any;

  area: any;
  areaType: string;

  width = '100%';
  height = 600;
  type = 'column2d';
  dataFormat = 'json';
  dataSource;

  constructor(
    private resultService: ResultService, 
    private settingsService: SettingsService,
    private areaService: AreaService
  ) { 
    this.election = settingsService.getSelectedElection();
    this.data = [];
  }

  ngOnInit() {
    this.areaService.federalByAreaId(this.election.Id, 'G00000').subscribe(
      f => {
        this.area = f
        this.areaType = 'federal'
      }
    );

    this.dataSource = {
        "chart": {
            "caption": "Gesamt",
            "numberprefix": "",
            "theme": "fint"
        },
        "data": this.data
    }
    this.resultService.relativeFederalResultWithColor(this.election.Id, 1).subscribe(
      r => r.forEach(p => this.data.push({"label": p.Value.Key, "value": Number(p.Value.Value).toFixed(2), "color": p.Key}))
    );
  }

}
