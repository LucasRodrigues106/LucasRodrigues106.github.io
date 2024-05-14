import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDeleteDataUserComponent } from './info-delete-data-user.component';

describe('InfoDeleteDataUserComponent', () => {
  let component: InfoDeleteDataUserComponent;
  let fixture: ComponentFixture<InfoDeleteDataUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoDeleteDataUserComponent]
    });
    fixture = TestBed.createComponent(InfoDeleteDataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
