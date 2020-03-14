import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabPeoplePage } from './tab-people.page';

describe('TabPeoplePage', () => {
  let component: TabPeoplePage;
  let fixture: ComponentFixture<TabPeoplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPeoplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabPeoplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
