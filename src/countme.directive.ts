import { Directive, ElementRef, HostListener, Input, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { CountmeService } from './countme.service';

@Directive({
  selector: '[countme]'
})
export class CountmeDirective implements AfterViewInit {

  @Input() countme: any; // get the config json from here
  @Output() countmeChange: EventEmitter<any> = new EventEmitter<any>();

  defaultConfig = {
    position: 'top-right',
    color: '#fff',
    backgroundColor: '#333',
    fontFamily: 'Monospace',
    fontSize: '10px'
  };

  constructor(private el: ElementRef,
              private countmeService: CountmeService) {
    this.countme = Object.assign(this.defaultConfig, this.countme || {});
  }

  ngAfterViewInit() {
    console.log('el', this.el);
    // console.log('countme', this.countme);
    // this.render(this.countme.position, null, null);
  }

  /*@HostListener('keyup') onKeyup() {
    const data = this.el.nativeElement.value ? this.el.nativeElement.value : this.el.nativeElement.innerText;
    const result = this.countmeService.count(data);
    this.countmeChange.emit(result);//Object.assign(result, this.countme || {}));
    // console.log('keyup', result);
  }*/

  @HostListener('change') onChange() {
    const data = this.el.nativeElement.value ? this.el.nativeElement.value : this.el.nativeElement.innerText;
    const result = this.countmeService.count(data);
    this.countmeChange.emit(result);//Object.assign(result, this.countme || {}));
    console.log('change', result);
  }

  /*@HostListener('DOMSubtreeModified') onChangeContent() {
    const data = this.el.nativeElement.value ? this.el.nativeElement.value : this.el.nativeElement.innerText;
    const result = this.countmeService.count(data);
    this.countmeChange.emit(Object.assign(result, this.countme || {}));
    // console.log('changeContent', result);
  }*/

  private render(position, color, font) {
    // create a label and attach to the parent element
    // widget.style.backgroundColor = color;
    // this.el.nativeElement.insert()
  }
}
