import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TansactionsComponent } from './tansactions.component';

describe('TansactionsComponent', () => {
  let component: TansactionsComponent;
  let fixture: ComponentFixture<TansactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TansactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TansactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
