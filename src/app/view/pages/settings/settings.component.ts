import { Component, OnInit } from '@angular/core';
import { AreaService, Election, Community } from '../../../library/api/index';
import { SettingsService } from '../../../library/services/settings-service.service';
import { element } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  election: Election;
  private areas: any;
  selectedArea: string;

  constructor(private areaService: AreaService, private settingsService: SettingsService, private router: Router) { 
    this.election = this.settingsService.getSelectedElection();
    this.areas = this.areaService.getAllCommunities(this.election.Id)
  }

  areasSelected(event: any) {
    console.log("selction changed");
    console.log(this.selectedArea);
    this.settingsService.setUserDefinedCommunity(this.selectedArea)
    this.router.navigateByUrl('home');
  }

  ngOnInit() {
  }

}
