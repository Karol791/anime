import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') bgColor: string = 'transparent';

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.bgColor = 'firebrick';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.bgColor = 'transparent';
  }

}
