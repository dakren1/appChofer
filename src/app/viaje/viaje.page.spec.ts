import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViajePage } from './viaje.page';

describe('ViajePage', () => {
  let component: ViajePage;
  let fixture: ComponentFixture<ViajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
