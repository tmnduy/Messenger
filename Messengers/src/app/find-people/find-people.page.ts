import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { element } from 'protractor';

@Component({
  selector: 'app-find-people',
  templateUrl: './find-people.page.html',
  styleUrls: ['./find-people.page.scss'],
})
export class FindPeoplePage implements OnInit {
  db = firebase.database()

  constructor() { }
  
  indexid: string;
  a: string;
  checkcancel(item){
    var add = document.getElementById(item.email)
    var cancel = document.getElementById(item.name)
    add.style.display = "block"
    cancel.style.display = 'none'
  }
  checkadd(item){
      
    var add = document.getElementById(item.email)
    var cancel = document.getElementById(item.name)
    add.style.display = "none"
    cancel.style.display = 'block'
  }

  ngOnInit() {
    this.init();

  }
  list:any
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
