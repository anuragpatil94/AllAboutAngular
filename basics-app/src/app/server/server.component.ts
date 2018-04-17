import { Component, OnInit } from '@angular/core';

// Decorator -  used to enhance classes
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
// export to use it outside
export class ServerComponent implements OnInit {
    serverId: number = 10;
    serverStatus: String = 'offline';
    constructor() { }
    
    getServerStatus(){
        return this.serverStatus
    }

    ngOnInit() {
    }
}