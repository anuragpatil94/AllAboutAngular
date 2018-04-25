import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  counter = 0;
  interval;

  constructor() {}

  ngOnInit() {}

  onGameStart() {
    this.interval = setInterval(() => {
      this.counter = this.counter + 1;
      this.intervalFired.emit(this.counter);
    }, 1000);
    // console.log(this.counter);
  }

  onGameStop() {
    clearInterval(this.interval);
  }
}
