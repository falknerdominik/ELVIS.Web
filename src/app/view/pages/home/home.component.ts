import { Component, OnInit } from '@angular/core';
import {AreaService, ElectionService} from '../../../library/api';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
// private areaService: AreaService, private electionService: ElectionService
    // electionService.getAllParties().subscribe(
    //   x => console.log(x),
    //   e => console.log(e),
    //   () => console.log("completed")
    // )
  }

  ngOnInit() { }
}
