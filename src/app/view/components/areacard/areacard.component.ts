import { Component, OnInit, Input } from '@angular/core';
import { ResultService, Election, KeyValuePairStringDouble } from '../../../library/api/index';
import { District } from '../../../library/api/index';
import { SettingsService } from '../../../library/services/settings-service.service';

@Component({
  selector: 'areacard',
  templateUrl: './areacard.component.html',
  styleUrls: ['./areacard.component.css']
})
export class AreacardComponent implements OnInit {
  private election: Election;

  @Input() area;
  @Input() areaType;

  constructor(private resultService: ResultService, private settingsService: SettingsService) { 
    this.election = settingsService.getSelectedElection();
  }

  ngOnInit() {
  }
}
