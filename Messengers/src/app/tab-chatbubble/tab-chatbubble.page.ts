import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { AccountModalPage } from '../account-modal/account-modal.page';

@Component({
  selector: 'app-tab-chatbubble',
  templateUrl: './tab-chatbubble.page.html',
  styleUrls: ['./tab-chatbubble.page.scss'],
})
export class TabChatbubblePage implements OnInit {

  constructor(public modalCtrl: ModalController, private routerOutlet: IonRouterOutlet) { }

  async openModel () {
    const modal = await this.modalCtrl.create({
      component: AccountModalPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    
    return await modal.present();
  }

  ngOnInit() {
  }

}
