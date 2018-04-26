import { Directive, ElementRef, OnInit } from "@angular/core";

// [] for attribute style directive selector
@Directive({
  selector: "[appBasicHighlight]"
})
export class basicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    //   Not a good practice to directly access elements
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}
