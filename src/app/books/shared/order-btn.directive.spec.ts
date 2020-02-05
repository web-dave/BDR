import { OrderBtnDirective } from './order-btn.directive';
import { Component } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { mockBooks } from 'mocks/serv';

@Component({
  template: '<div [hannesOrderBtn]="book"></div>'
})
class SandboxComponent {
  book = mockBooks[0];
}

fdescribe('OrderBtnDirective', () => {
  let comp: SandboxComponent;
  let fixture: ComponentFixture<SandboxComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SandboxComponent, OrderBtnDirective]
    }).compileComponents();
    fixture = TestBed.createComponent(SandboxComponent);
    comp = fixture.componentInstance;
  }));
  it('should be created', () => {
    expect(comp).toBeTruthy();
  });
});
