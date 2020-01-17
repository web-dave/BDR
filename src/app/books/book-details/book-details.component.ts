import { Component, OnInit } from '@angular/core';
import { BooksService } from '../shared/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IBook } from '../shared/ibook.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'hannes-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<IBook>;
  zahl = 404;
  constructor(
    private service: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.book$ = this.route.params.pipe(
      switchMap(p => this.service.getBook(p.isbn))
    );
  }
}
