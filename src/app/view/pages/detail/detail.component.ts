import { Component, OnInit } from '@angular/core';
import { AreaService, Election } from '../../../library/api/index';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SettingsService } from '../../../library/services/settings-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  area: Observable<any>;
  election: Election;
  areaId: any;

  chart: any = {
    "caption": `Stimmenverteilung`,
    "numberprefix": "",
    "theme": "fint"
  }

  constructor(private route: ActivatedRoute, private areaService: AreaService, settingsService: SettingsService) { 
    this.route.queryParams.subscribe(
      param => { 
        this.election = settingsService.getSelectedElection();
        this.area = this.getArea(param.area, param.id);
        this.area.subscribe(
          a => this.chart.caption = `Stimmverteilung ${a.Name}`
        )
      }
    );
  }

  getArea(areaType: string, areaId: string) : Observable<any> {
    console.log(areaId);
    switch(areaType) {
      case 'constituencies':
        return this.areaService.constituencyByAreaId(this.election.Id, areaId);
      case 'districts':
        return this.areaService.districtByAreaId(this.election.Id, areaId);
      case 'provinces':
        return this.areaService.provinceByAreaId(this.election.Id, areaId);
      case 'communities':
        return this.areaService.communityByAreaId(this.election.Id, areaId);
      default:
        break;
    }
  }

  ngOnInit() {
  }

}
