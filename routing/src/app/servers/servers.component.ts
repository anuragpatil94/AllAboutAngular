import { Component, OnInit } from "@angular/core";
import { ServersService } from "./servers.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  private servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    //Here relative path will not produce error because navigate doesn't know on which route it is.
    // this.router.navigate(["servers"]);

    //To make this relative. hence it will give error now.  i.e. it will go  for localhost:4200/servers/servers
    // this.router.navigate(["servers"], { relativeTo: this.route });
  }
}
