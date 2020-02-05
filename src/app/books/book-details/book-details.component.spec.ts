import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PagesPipe, OrderBtnDirective } from 'mocks/comps';

import { BookDetailsComponent } from './book-details.component';
import { BooksService } from '../shared/books.service';
import { MockBooksService, mockBooks } from 'mocks/serv';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let service: BooksService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookDetailsComponent, PagesPipe, OrderBtnDirective],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({ isbn: '123' }), snapShot: {} }
        }
      ]
    }).compileComponents();

    service = TestBed.get(BooksService);

    spyOn(service, 'getBook').and.returnValue(of(mockBooks[0]));
    // .withArgs('123')
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a Book', () => {
    expect(service.getBook).toHaveBeenCalledWith('123');
  });
});
