import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'areacard',
  templateUrl: './areacard.component.html',
  styleUrls: ['./areacard.component.css']
})
export class AreacardComponent implements OnInit {

  @Input() area;

  constructor() { }

  ngOnInit() {
  }

}
