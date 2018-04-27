import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]"
})
export class UnlessDirective {
  // This Directive will work opposite to "if"
  // the property name here or the function name should be same as selector
  @Input()
  set appUnless(condition: boolean) {
    if (!condition) {
      //creates a view int the view container
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
