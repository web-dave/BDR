import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from '../shared/books.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { retryWhen, delay, tap } from 'rxjs/operators';
import { IBook } from '../shared/ibook.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hannes-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  book$: Observable<IBook[]>;

  // i = 0;
  // ob = new BehaviorSubject(this.i);
  constructor(
    private service: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.book$ = this.service.getBooks();
  }
  ngOnDestroy() {
    console.log('Tschö');
  }

  selectBook(foo: IBook) {
    console.log('!!->', foo);
    this.router.navigate([foo.isbn], { relativeTo: this.route });
  }
}
