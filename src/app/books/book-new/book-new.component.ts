import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService } from '../shared/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IBook } from '../shared/ibook.interface';

@Component({
  selector: 'hannes-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  newBookForm: FormGroup;
  private saved = false;
  constructor(
    private service: BooksService,
    private formbuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.newBookForm = this.formbuilder.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      subtitle: ['', []],
      isbn: ['', []],
      abstract: ['', []],
      numPages: [0],
      author: ['', [Validators.required]],
      publisher: this.formbuilder.group({
        name: ['', []],
        url: ['', []]
      })
    });
  }

  saveBook() {
    console.log(new Date());
    this.service.createBook(this.newBookForm.value).subscribe((b: IBook) => {
      this.saved = true;
      this.router.navigate(['..', b.isbn], { relativeTo: this.route });
    });
  }

  isSaved(): boolean {
    return this.saved || !this.newBookForm.dirty;
  }
}
