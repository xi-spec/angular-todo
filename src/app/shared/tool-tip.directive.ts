import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appToolTip]',
})
export class ToolTipDirective implements AfterViewInit {
  @Input('appToolTip') toolTipContent: string;

  constructor(public elRef: ElementRef) {}

  ngAfterViewInit(): void {
    tippy(this.elRef.nativeElement, {
      content: this.toolTipContent,
      delay: 200,
      moveTransition: 'transform 0.5s ease-out',
    });
  }
}
