export class CounterService {
  countAI: number = 0;
  countIA: number = 0;
  constructor() {}

  countActiveToInactive() {
    this.countAI = this.countAI + 1;
    console.log("Active -> Inactive: ", this.countAI);
  }
  countInactiveToActive() {
    this.countIA = this.countIA + 1;
    console.log("Inactive -> Active: ", this.countIA);
  }
}
