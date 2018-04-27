import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  switchValue = 0;
  interval;
  constructor() {
    this.interval = setInterval(() => {
      this.switchValue = (this.switchValue + 1) % 4;
      console.log(this.switchValue);
    }, 1000);
    setTimeout(() => {
      clearInterval(this.interval);
      console.log("Interval Cleared");
    }, 5000);
  }

  ngOnInit() {}
}
