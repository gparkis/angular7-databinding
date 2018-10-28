import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  serverID: number =  10;
  serverstatus: string = 'online';

  getServerStatus() {
    return this.serverstatus;
  }

  constructor() { }

  ngOnInit() {
  }

}
