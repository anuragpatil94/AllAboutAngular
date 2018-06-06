import { Component, ViewChild } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // @ViewChild("f") signupform: NgForm;
  @ViewChild("email") emailLocalRef: NgModel;
  defaultQuestion = "pet";
  answer: "";

  suggestUserName() {
    const suggestedName = "Superuser";
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.emailLocalRef);
  }

  // ViewChild Approach
  // onSubmit() {
  //   console.log(this.signupform);
  // }
}
