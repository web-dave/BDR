import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { restroot } from '../../../environments/environment';

import { IBook } from './ibook.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // private root = 'http://localhost:4730/books/';
  private root = restroot;
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.root);
  }

  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(this.root + isbn);
  }

  saveBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(this.root + book.isbn, book);
  }

  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.root, book);
  }
}
