import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { AccountModalPage } from '../account-modal/account-modal.page';
import { Router } from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: 'app-tab-chatbubble',
  templateUrl: './tab-chatbubble.page.html',
  styleUrls: ['./tab-chatbubble.page.scss'],
})
export class TabChatbubblePage implements OnInit {
  db = firebase.database()
  name: string;
  constructor(public modalCtrl: ModalController, private routerOutlet: IonRouterOutlet,public route: Router) { }

  currentModal = null;

  async openModel () {
    const modal = await this.modalCtrl.create({
      component: AccountModalPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    return await modal.present();
  
  }

  open(item){
    var email = document.getElementById(item.email).textContent
    firebase.database().ref('DesEmail').push({
      sendemail: email
    }).then(()=>{

    })
        this.route.navigateByUrl("home-chatbox");
  }
  ngOnInit() {
    this.init();

  }
  thislist:any
  statuslist:any
  listShow=[]
  init(){
    //lấy bảng status
    this.db.ref('Status').orderByChild('uid').once('value').then((res)=>{
      this.statuslist=[];
      var allItem = res.val()
      for(let key in allItem){
        this.statuslist.push(allItem[key])
      }
      this.db.ref('Profile').orderByChild('uid').once('value').then((res)=>{
        this.thislist=[];
        var allItem = res.val()
        for(let key in allItem){
          this.thislist.push(allItem[key])
        }
        this.statuslist.forEach(element => {
          this.thislist.forEach(ele => {
            if(ele.email != element.email){
              this.listShow.push(ele)
            }
          });
        });
      })
    })
    
  }

  

}
