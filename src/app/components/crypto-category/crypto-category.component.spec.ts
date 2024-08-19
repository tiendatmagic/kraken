import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCategoryComponent } from './crypto-category.component';

describe('CryptoCategoryComponent', () => {
  let component: CryptoCategoryComponent;
  let fixture: ComponentFixture<CryptoCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CryptoCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CryptoCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
