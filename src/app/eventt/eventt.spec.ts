import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventt } from './eventt';

describe('Eventt', () => {
  let component: Eventt;
  let fixture: ComponentFixture<Eventt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
