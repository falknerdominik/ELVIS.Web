import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';
import { AreaService, Election, Community } from '../../../library/api/index';
import { SettingsService } from '../../../library/services/settings-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private election: Election;
  private areas: any;
  private areaType: string = '';

  constructor(
    private route: ActivatedRoute, 
    private areaManager: AreaService,
    private settingsService: SettingsService
  ) { }

  ngOnInit() { 
    this.route.queryParams.subscribe(
      param => { 
        this.election = this.settingsService.getSelectedElection()
        this.areaType = param.area;
        this.initList(param.area);
      }
    );
  }

  initList(area: string) {
    this.areas = this.getAreas(area);
  }

  getAreas(area: string): Observable<Community[]> {
    switch(area) {
      case 'constituencies':
        return this.areaManager.getAllConstituencies(this.election.Id);
      case 'districts':
        return this.areaManager.getAllDistricts(this.election.Id);
      case 'provinces':
        return this.areaManager.getAllProvinces(this.election.Id);
      case 'communities':
        return this.areaManager.getAllCommunities(this.election.Id);
      default:
        null;
        break;
    }
  }
}
