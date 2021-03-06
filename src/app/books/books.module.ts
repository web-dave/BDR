import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { PreviewComponent } from './preview/preview.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { PagesPipe } from './shared/pages.pipe';
import { OrderBtnDirective } from './shared/order-btn.directive';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    PreviewComponent,
    BookDetailsComponent,
    PagesPipe,
    OrderBtnDirective,
    BookEditComponent,
    BookNewComponent
  ],
  exports: [BooksComponent],
  imports: [CommonModule, BooksRoutingModule, FormsModule, ReactiveFormsModule]
})
export class BooksModule {}
