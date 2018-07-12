import { Directive, ElementRef, Renderer2, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective implements OnInit{
  @Input() hidden: boolean;

  constructor( private element: ElementRef, private renderer2: Renderer2 ) {}
  
    ngOnInit (){
      if(this.hidden){
        //this.element.nativeElement.style.display = 'none';
        this.renderer2.setStyle(this.element.nativeElement, 'display', 'none');
      }
    }  
}
