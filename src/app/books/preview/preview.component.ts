import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { IBook } from '../shared/ibook.interface';

@Component({
  selector: 'hannes-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewComponent implements OnInit {
  @Input() book: IBook;
  @Output() bookselected = new EventEmitter<IBook>();
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    setInterval(() => {
      this.cdr.markForCheck();
    }, 4000);
  }

  selectThisBook() {
    this.bookselected.emit(this.book);
  }
}
