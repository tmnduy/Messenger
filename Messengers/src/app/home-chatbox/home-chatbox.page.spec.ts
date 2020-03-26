import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeChatboxPage } from './home-chatbox.page';

describe('HomeChatboxPage', () => {
  let component: HomeChatboxPage;
  let fixture: ComponentFixture<HomeChatboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeChatboxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeChatboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
