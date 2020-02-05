import {
  Component,
  Directive,
  Pipe,
  Input,
  Output,
  EventEmitter,
  PipeTransform
} from '@angular/core';

@Component({
  template: '',
  selector: 'dummy'
})
export class DummyComponent {}

@Directive({
  selector: '[hannesOrderBtn]'
})
export class OrderBtnDirective {
  @Input() hannesOrderBtn: any;
}

@Component({
  template: '',
  selector: 'hannes-preview'
})
export class BookPreviewComponent {
  @Input() book: any;
  @Output() bookselected = new EventEmitter<any>();
}

@Pipe({
  name: 'pages'
})
export class PagesPipe implements PipeTransform {
  transform(any) {
    return any;
  }
}
