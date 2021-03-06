import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from "firebase";
import { element, Key } from 'protractor';

@Component({
  selector: 'app-tab-people',
  templateUrl: './tab-people.page.html',
  styleUrls: ['./tab-people.page.scss'],
})
export class TabPeoplePage implements OnInit {

  constructor(public router:Router) { }

  open(){
    this.router.navigateByUrl("home-chatbox");
  }

  openprofile(){
    this.router.navigateByUrl("contact");
  }
  db = firebase.database()
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


  ngOnInit() {
    
    this.init();
  }

}
