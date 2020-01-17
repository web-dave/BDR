import {
  Directive,
  Input,
  ElementRef,
  OnChanges,
  HostListener
} from '@angular/core';
import { IBook } from './ibook.interface';

@Directive({
  selector: '[hannesOrderBtn]'
})
export class OrderBtnDirective implements OnChanges {
  @Input() hannesOrderBtn: IBook;
  btnElement: HTMLButtonElement = document.createElement('button');
  constructor(elem: ElementRef) {
    elem.nativeElement.appendChild(this.btnElement);
  }

  ngOnChanges(changeObj) {
    this.btnElement.innerText =
      this.hannesOrderBtn.title + ' in den Wahrenkorb';
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouseleave');
  }
}
