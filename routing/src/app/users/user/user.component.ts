import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //['id'] this we get from what we named the param in the route. This will only work for the 1st time. If a new link is called from /id/name page to another /id/name then it won't update the page. Hence we use subscribe 
    this.user = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"]
    };
    this.route.params.subscribe((params: Params) => {
      this.user = {
        id: params["id"],
        name: params["name"]
      };
    });
  }
}
