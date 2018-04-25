import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onIntervalFired(counter: number) {
    if (counter % 2 != 0) {
      this.oddNumbers.push(counter);
    } else {
      this.evenNumbers.push(counter);
    }
  }
}
