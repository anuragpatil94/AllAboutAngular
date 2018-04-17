import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was Created';
  serverName= 'Initial Value';

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server is Created';
  }

  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value; // We add <HTMLInputElement> because value is only available when target is of type HTMLInputElement. Hence to inform Typescript we do this explicitly.
  }
}
