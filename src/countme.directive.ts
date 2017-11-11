import { Directive, ElementRef, HostListener, Input, AfterViewInit } from '@angular/core';
import { CountmeService } from './countme.service';

@Directive({
  selector: '[countme]'
})
export class CountmeDirective implements AfterViewInit {

  @Input() countmeStyle: string;
  @Input() countme: any;
  @Input() position: any;

  constructor(private el: ElementRef,
              private countmeService: CountmeService) {
  }

  ngAfterViewInit() {
    this.render(this.countme.position, 0, 0);
  }

  @HostListener('keyup') onKeyup() {
    const data = this.el.nativeElement.value ? this.el.nativeElement.value : this.el.nativeElement.innerText;
    const result = this.countmeService.count(data);
    console.log(result);
  }

  private render(position: any, count, limit) {
    // this.el.nativeElement.style.backgroundColor = color;
  }
}
