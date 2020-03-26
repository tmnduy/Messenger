import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabChatbubblePage } from './tab-chatbubble.page';

describe('TabChatbubblePage', () => {
  let component: TabChatbubblePage;
  let fixture: ComponentFixture<TabChatbubblePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabChatbubblePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabChatbubblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
