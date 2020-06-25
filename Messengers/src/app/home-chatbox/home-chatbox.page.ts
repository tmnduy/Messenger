import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { element } from 'protractor';
import { AngularFireDatabase } from '@angular/fire/database';
import { NavController, NavParams, AlertController } from '@ionic/angular';
import { timeStamp } from 'console';


@Component({
  selector: 'app-home-chatbox',
  templateUrl: './home-chatbox.page.html',
  styleUrls: ['./home-chatbox.page.scss'],
})
export class HomeChatboxPage implements OnInit {
  db = firebase.database()
  text:string
  constructor(
    public dbf: AngularFireDatabase,
    public navCtrl: NavController,
    // public navParams: NavParams,
    // public event: Event,
    public alertCtrl:AlertController

    ) { 
      
    }

  deleteDes(){
    firebase.database().ref('DesEmail').remove();
  }
  sentlist=[]
  desemail:any
  sentemail:any
  thislist:any
  statuslist:any

  chatlist:any
  chatlistseft=[]
  chatlistother=[]

  listShow=[]
  init(){
    this.db.ref('DesEmail').orderByChild('uid').once('value').then((res)=>{
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
        this.db.ref('Chatbox').orderByChild('uid').once('value').then((res)=>{
          this.chatlist=[];
          var allItem = res.val()
          for(let key in allItem){
            this.chatlist.push(allItem[key])
          }
          this.statuslist.forEach(element => {

            this.desemail=element.sendemail

            this.thislist.forEach(ele => {
              if(ele.email == element.sendemail){
                this.listShow.push(ele)
              }
            });

            this.chatlist.forEach(element3 => {

              if(element3.sentemail==this.sentemail && element.sendemail==element3.desemail){

                this.chatlistseft.push(element3)
                
              }else
              if(element3.desemail==this.sentemail && element3.sentemail==element.sendemail){
                console.log(element3.sentemail)
                console.log(element.sendemail)
                this.chatlistother.push(element3)}
            });  
          });
        })
      })
    })

    this.db.ref('Status').orderByChild('uid').once('value').then((res)=>{
      this.sentlist=[];
      var allItem = res.val()
      for(let key in allItem){
        this.sentlist.push(allItem[key])
      }
      this.sentlist.forEach(element2 => {
        this.sentemail = element2.email
      });
    })

    


  }

  send(){

    
    firebase.database().ref('Chatbox').push({
      desemail: this.desemail,
      sentemail: this.sentemail,
      text: this.text,
      timeStamp: firebase.database.ServerValue.TIMESTAMP
      }).then(()=>{
      })
      console.log(this.sentemail+" "+this.desemail+" "+this.text)
      var input = document.getElementById("input")
  
    }
    
  ngOnInit() {
    this.init();
    
    
  }

}
