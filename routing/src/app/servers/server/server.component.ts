import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  paramsSubscription: Subscription;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.server = this.serversService.getServer(
    //   this.route.snapshot.params["id"]
    // );
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      // + is alternative way for typecasting
      this.server = this.serversService.getServer(+params["id"]);
    });
  }
  ngOnDestroy() {
    // this.paramsSubscription.unsubscribe();
  }
}
