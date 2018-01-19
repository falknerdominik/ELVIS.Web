import { Component, OnInit } from '@angular/core';
import {AreaService, ElectionService} from '../../../library/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private areaService: AreaService, private electionService: ElectionService) { }

  ngOnInit() { }
}
