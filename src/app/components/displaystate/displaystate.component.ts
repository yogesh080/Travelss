import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaystate',
  templateUrl: './displaystate.component.html',
  styleUrls: ['./displaystate.component.scss']
})
export class DisplaystateComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onclick()
  {
    
    this.route.navigateByUrl('state')
  }
}
