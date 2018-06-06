import { Component, ViewChild } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("f") signupform: NgForm;
  @ViewChild("email") emailLocalRef: NgModel;
  defaultQuestion = "pet";
  answer: "";
  genders = ["male", "female"];
  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: ""
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = "Superuser";
    // this.signupform.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: "",
    //     gender: "male"
    //   },
    //   secret: "pet",
    //   questionAnswer: ""
    // });
    this.signupform.form.patchValue({ userData: { username: suggestedName } });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   console.log(this.emailLocalRef);
  // }

  // ViewChild Approach
  onSubmit() {
    this.submitted = true;
    console.log(this.signupform);
    this.user.username = this.signupform.value.userData.username;
    this.user.email = this.signupform.value.userData.email;
    this.user.gender = this.signupform.value.userData.gender;
    this.user.secretQuestion = this.signupform.value.secret;
    this.user.answer = this.signupform.value.questionAnswer;

    // resets value as well as state
    this.signupform.reset();
  }
}
