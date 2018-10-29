import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  serverID: number =  10;
  serverstatus: string = 'offline';
  allowNewServer: boolean = false;

  getServerStatus() {
    return this.serverstatus;
  }

  constructor() {
    setTimeout(() => {
      this.serverstatus = "online";
    },2000);

    setTimeout(() => {
      this.allowNewServer = true;
    }, 4000);
   }

  ngOnInit() {
  }

}
