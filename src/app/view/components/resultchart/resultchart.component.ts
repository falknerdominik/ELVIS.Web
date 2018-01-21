import { Component, OnInit, Input } from '@angular/core';
import { ResultService, AreaService } from '../../../library/api/index';
import { SettingsService } from '../../../library/services/settings-service.service';

@Component({
  selector: 'resultchart',
  templateUrl: './resultchart.component.html',
  styleUrls: ['./resultchart.component.css']
})
export class ResultchartComponent implements OnInit {

  @Input() area;
  @Input() areaType;
  @Input() chart;

  data: any[];
  election: any;
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
    this.area.subscribe(
      area => {
        this.dataSource = {
            "chart": this.chart,
            "data": this.data
        }

        switch(this.areaType) {
          case 'constituencies':
            this.resultService.relativeConstituencyResultWithColor(this.election.Id, area.ConstituencyId).subscribe(
              r => r.forEach(p => this.data.push({"label": p.Value.Key, "value": Number(p.Value.Value).toFixed(2), "color": p.Key}))
            );
            break;
          case 'districts':
            this.resultService.relativeDistrictResultWithColor(this.election.Id, area.DistrictId).subscribe(
              r => r.forEach(p => this.data.push({"label": p.Value.Key, "value": Number(p.Value.Value).toFixed(2), "color": p.Key}))
            );
            break;
          case 'provinces':
            this.resultService.relativeProvinceResultWithColor(this.election.Id, area.FederalId, area.ProvinceId).subscribe(
              r => r.forEach(p => this.data.push({"label": p.Value.Key, "value": Number(p.Value.Value).toFixed(2), "color": p.Key}))
            );
            break;
          case 'communities':
            this.resultService.relativeDistrictResultWithColor(this.election.Id, area.DistrictId).subscribe(
              r => r.forEach(p => this.data.push({"label": p.Value.Key, "value": Number(p.Value.Value).toFixed(2), "color": p.Key}))
            );
            break;
          case 'federal':
            this.resultService.relativeFederalResultWithColor(this.election.Id, area.FederalId).subscribe(
              r => r.forEach(p => this.data.push({"label": p.Value.Key, "value": Number(p.Value.Value).toFixed(2), "color": p.Key}))
            );
            break;
          default:
            break;
        }
      }
    );
  }
}
