import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ResultService, KeyValuePairStringDouble, Election } from '../../../library/api/index';
import { SettingsService } from '../../../library/services/settings-service.service';

@Component({
  selector: 'mandat-ray',
  templateUrl: './mandat-ray.component.html',
  styleUrls: ['./mandat-ray.component.css']
})
export class MandatRayComponent implements OnInit {
  private partyResults: any;
  private election: Election;

  @Input() area;
  @Input() areaType;

  constructor(private resultService: ResultService, settingsService: SettingsService) { 
    this.election = settingsService.getSelectedElection();
  }

  ngOnInit() {
    switch(this.areaType) {
      case 'constituencies':
        this.resultService.relativeConstituencyResultWithColor(this.election.Id, this.area.ConstituencyId).subscribe(
          r => this.partyResults = r.filter(p => p.Value.Value > 4.0)
        );
        break;
      case 'districts':
        this.resultService.relativeDistrictResultWithColor(this.election.Id, this.area.DistrictId).subscribe(
          r => this.partyResults = r.filter(p => p.Value.Value > 4.0)
        );
        break;
      case 'provinces':
        this.resultService.relativeProvinceResultWithColor(this.election.Id, this.area.FederalId, this.area.ProvinceId).subscribe(
          r => this.partyResults = r.filter(p => p.Value.Value > 4.0)
        );
        break;
      case 'communities':
        this.resultService.relativeDistrictResultWithColor(this.election.Id, this.area.DistrictId).subscribe(
          r => this.partyResults = r.filter(p => p.Value.Value > 4.0)
        );
        break;
      case 'federal':
        this.resultService.relativeFederalResultWithColor(this.election.Id, this.area.FederalId).subscribe(
          r => this.partyResults = r.filter(p => p.Value.Value > 4.0)
        );
        break;
      default:
        break;
    }
  }

  normalizeForChart(results: any[]) {
    console.log(results);
    return results
      .filter(r => r.value > 0)
      .map(r => {
        r.value *= 10
        return r;
      });
  }
}
