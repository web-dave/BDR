import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { declarations } from 'mocks/conf';
import { BooksService } from '../shared/books.service';
import { MockBooksService } from 'mocks/serv';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [...declarations],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: BooksService,
          useClass: MockBooksService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 3 Books', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement;

    expect(
      compiled.querySelector('ul').querySelectorAll('hannes-preview').length
    ).toBe(3);
  });
});
