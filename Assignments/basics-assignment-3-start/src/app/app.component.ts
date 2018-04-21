import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  buttonLogs = [];
  showDisplay = false;
  password = "";
  background = "";
  counter = 0;
  onToggleDetails() {
    this.showDisplay = !this.showDisplay;
    if (this.showDisplay) {
      this.password = "AngularJS";
    } else {
      this.password = "";
    }
    this.buttonLogs.push(Date.now());
  }
}
