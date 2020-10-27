import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatospersonalesPage } from './datospersonales.page';

describe('DatospersonalesPage', () => {
  let component: DatospersonalesPage;
  let fixture: ComponentFixture<DatospersonalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatospersonalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatospersonalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
