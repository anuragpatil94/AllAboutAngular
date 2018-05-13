import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Observer, Subscription } from "rxjs";
import "rxjs/Rx";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  numberObservableSubscription: Subscription;
  customObservableSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.numberObservableSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next("first package");
      }, 2000);
      setTimeout(() => {
        observer.next("second package");
      }, 4000);
      setTimeout(() => {
        // observer.error("Didnt Work");
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next("third package");
      }, 6000);
      setTimeout(() => {
        observer.next("forth package");
      }, 3000);
    });

    this.customObservableSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log("completed");
      }
    );
  }

  ngOnDestroy() {
    this.numberObservableSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }
}
