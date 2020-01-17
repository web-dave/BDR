import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBook } from '../shared/ibook.interface';

@Component({
  selector: 'hannes-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() book: IBook;
  @Output() bookselected = new EventEmitter<IBook>();
  constructor() {}

  ngOnInit() {}

  selectThisBook() {
    this.bookselected.emit(this.book);
  }
}
