import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookNewComponent } from '../book-new/book-new.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard implements CanDeactivate<BookNewComponent> {
  canDeactivate(
    component: BookNewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (!component.isSaved()) {
      // tslint:disable-next-line:quotemark
      return window.confirm("R U SURE?\nIt's NOT saved!");
    }
    return true;
  }
}
