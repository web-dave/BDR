import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { mockBooks } from 'mocks/serv';

fdescribe('BooksService', () => {
  let service: BooksService;
  let backend: HttpTestingController;

  beforeEach(() => {
    // setup @ngModule for testing
    TestBed.configureTestingModule({
      providers: [BooksService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(BooksService);
    backend = TestBed.get(HttpTestingController);
  });

  // check after each test there is no pending(open) request
  afterEach(() => {
    backend.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getBooks should return all books', done => {
    service.getBooks().subscribe(books => {
      expect(books).toEqual(mockBooks);
      done();
    });
    const call = backend.expectOne(service.root);
    // expect(call.request.method).toBe('GET');
    call.flush(mockBooks, { status: 200, statusText: 'OK' });
  });

  it('getBook should return one specific book', done => {
    service.getBook('123').subscribe(books => {
      expect(books).toEqual(mockBooks[0]);
      done();
    });
    const call = backend.expectOne(service.root + '/123');
    expect(call.request.method).toBe('GET');
    call.flush(mockBooks[0], { status: 200, statusText: 'OK' });
  });

  it('updateBook should update a book', done => {
    const book = { ...mockBooks[0] };
    book.title = 'Moin';
    service.saveBook(book).subscribe(b => {
      expect(b).toEqual(book);
      done();
    });
    const call = backend.expectOne(service.root + '/' + book.isbn);
    expect(call.request.method).toBe('PUT');
    call.flush(book);
  });

  // it('createBook should create a new book', done => {
  //   const book = new Book();
  //   book.title = 'Moin';
  //   service.createBook(book).subscribe(b => {
  //     expect(b).toEqual(book);
  //     done();
  //   });
  //   const call = backend.expectOne(service.root);
  //   expect(call.request.method).toBe('POST');
  //   call.flush(book);
  // });
});
