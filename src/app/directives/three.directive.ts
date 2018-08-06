import {
  Directive,
  HostBinding,
  Input,
  HostListener,
  ViewContainerRef,
  TemplateRef,
  ElementRef
} from "@angular/core";

//attribute selector
@Directive({
  selector: "[three]"
})
export class ThreeDirective {
  @Input("three")
  set three(value) {
    this.viewContainerRef.createEmbeddedView(this.template, {
      $implicit: "Awesome"
    });
    this.viewContainerRef.createEmbeddedView(this.template, {
      $implicit: "Amazing"
    });
    this.viewContainerRef.createEmbeddedView(this.template, {
      $implicit: "Sweet"
    });
  }
  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>,
    private el: ElementRef
  ) {
    console.log(el.nativeElement);
  }

  // ngAfterViewInit() {
  //   this.viewContainerRef.createEmbeddedView(this.template, {
  //     $implicit: "Awesome"
  //   });
  // }
}
