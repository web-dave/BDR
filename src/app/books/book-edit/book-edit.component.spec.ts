import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BookEditComponent } from './book-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BooksService } from '../shared/books.service';
import { MockBooksService } from 'mocks/serv';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('BookEditComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;
  let view;
  let input: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookEditComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [
        {
          provide: BooksService,
          useClass: MockBooksService
        },
        {
          provide: ActivatedRoute,
          useValue: { params: of({ isbn: '123' }), snapshot: {} }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    view = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    input = view.querySelector('[name="title"]');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should provide book.title in input', () => {
    fixture.detectChanges();
    input.dispatchEvent(new Event('input'));
    // expect(input.value).toBe('Design Patterns');
    expect(input.classList.contains('ng-valid')).toBeTruthy();
  });

  it('should validate empty', fakeAsync(() => {
    input.value = '12345';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(1);
    expect(input.classList.contains('ng-invalid')).toBeTruthy();
  }));
});
