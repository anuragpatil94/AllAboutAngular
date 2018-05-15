import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("f") signupform: NgForm;
  suggestUserName() {
    const suggestedName = "Superuser";
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  // ViewChild Approach
  // onSubmit() {
  //   console.log(this.signupform);
  // }
}
