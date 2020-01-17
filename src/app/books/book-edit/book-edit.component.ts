import { Component, OnInit, OnDestroy } from '@angular/core';
import { IBook } from '../shared/ibook.interface';
import { BooksService } from '../shared/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'hannes-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit, OnDestroy {
  book: IBook;
  sub: Subscription = new Subscription();
  constructor(
    private service: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub.add(
      this.route.params
        .pipe(switchMap(p => this.service.getBook(p.isbn)))
        .subscribe(b => (this.book = b))
    );
  }

  save(book) {
    // an das Template übergeben (AsyncPipe)
    // Beim ausführen des Subscribes wird die Pipe getriggert
    // und wir navigieren weg
    // this.book$ = this.service
    //   .saveBook(book)
    //   .pipe(
    //     tap(() => this.router.navigate(['..'], { relativeTo: this.route }))
    //   );

    this.sub.add(
      this.service
        .saveBook(book)
        .subscribe(() =>
          this.router.navigate(['..'], { relativeTo: this.route })
        )
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
