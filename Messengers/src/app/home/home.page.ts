import { Router } from "@angular/router";
import { Component } from "@angular/core";
import * as firebase from "firebase";

import { Platform, AlertController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  email: string;
  password: string;
  provider = new firebase.auth.FacebookAuthProvider();
  db = firebase.database()
  constructor(public Router: Router,private platform: Platform,
    private alert: AlertController) {}


    ngOnInit() {
      firebase.database().ref('Status').remove();
  
    }
  realtimetest(){
    //puss
    firebase.database().ref('abc').push({
      id: 'xxx',
      name: 'yyy'
    }).then(()=>{
      console.log('success');

      //get
      this.db.ref('Profile').orderByChild('uid').once('value').then((res)=>{
        var list=[];
        var allItem = res.val()
        for(let key in allItem){
          list.push(allItem[key])
        }
        console.log(list);
        
      })
    })
    
  }


  login() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(async () => await this.Router.navigate(["/index"]))
      .catch((error) => {
        this.AlertError();
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
      firebase.database().ref('Status').push({
        email: this.email
      }).then(()=>{
      
        
      })
      
  }

  async AlertError() {
    const alert = await this.alert.create({
      cssClass: "my-custom-class",
      subHeader: "Lỗi",
      message: "Email hoặc mật khẩu không đúng.",
      buttons: ["OK"],
    });

    await alert.present();
  }
  // loginfb() {
  //   firebase
  //     .auth()
  //     .signInWithPopup(this.provider)
  //     .then(function (result) {
  //       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //       var token = result.credential.accessToken;
  //       // The signed-in user info.
  //       var user = result.user;
  //       // ...
  //     })
  //     .catch(function (error) {
  //       // Handle Errors here.
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       // The email of the user's account used.
  //       var email = error.email;
  //       // The firebase.auth.AuthCredential type that was used.
  //       var credential = error.credential;
  //       // ...
  //       console.log(errorMessage);
  //       console.log(errorCode);
  //     });
  // }
}
