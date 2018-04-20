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
  serverCreated = false;
  serverName= '';
  servers=['TestServer', 'TestServer 2']

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server is Created! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value; // We add <HTMLInputElement> because value is only available when target is of type HTMLInputElement. Hence to inform Typescript we do this explicitly.
  }
}
