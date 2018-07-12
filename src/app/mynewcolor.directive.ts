import { Directive, Input, Output, EventEmitter, Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appMynewcolor]'
})
export class MynewcolorDirective {
  @Input() mycolor: string;
  @Output () changeColor = new EventEmitter();;
  //newColor:string;
    
  constructor(private element:ElementRef, renderer2:Renderer2) {   } 
  
  @HostListener('click') foo() {
      this.element.nativeElement.style.color= this.mycolor;
      // this.renderer2.setStyle(this.element.nativeElement, 'display', 'none');
      this.changeColor.emit(this.mycolor);
    
  }

}
