import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNewComponent } from './book-new.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BooksService } from '../shared/books.service';
import { MockBooksService } from 'mocks/serv';

describe('BookNewComponent', () => {
  let component: BookNewComponent;
  let fixture: ComponentFixture<BookNewComponent>;
  let form: FormGroup;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookNewComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [
        {
          provide: BooksService,
          useClass: MockBooksService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    form = component.newBookForm;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should validate "Affe"', () => {
    expect(form.get('title').hasError('required')).toBeTruthy();
    form.get('title').setValue('Affe');
    fixture.detectChanges();
    expect(form.get('title').hasError('required')).toBeFalsy();
  });
});
