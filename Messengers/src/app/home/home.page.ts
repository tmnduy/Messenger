import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook/ngx";

import * as firebase from "firebase";
import { Platform, AlertController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  email: string;
  password: string;
  provider = new firebase.auth.FacebookAuthProvider();
  loginType: string;

  // validation_messages = {
  //   email: [
  //     { type: "required", message: "Email is required." },
  //     { type: "pattern", message: "Enter a valid email." },
  //   ],
  //   password: [
  //     { type: "required", message: "Password is required." },
  //     {
  //       type: "minlength",
  //       message: "Password must be at least 5 characters long.",
  //     },
  //   ],
  // };

  constructor(
    public Router: Router,
    private fb: Facebook,
    private platform: Platform,
    private alert: AlertController
  ) {}

  ngOnInit() {
    // this.validations_form = this.formBuilder.group({
    //   email: new FormControl(
    //     "",
    //     Validators.compose([
    //       Validators.required,
    //       Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
    //     ])
    //   ),
    //   password: new FormControl(
    //     "",
    //     Validators.compose([Validators.minLength(5), Validators.required])
    //   ),
    // });
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

  login() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(async () => await this.Router.navigate(["/index"]))
      .catch((error) => {
        // Handle Errors here.
        this.AlertError();
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
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
  // loginfb() {
  //   if (this.platform.is("cordova")) {
  //     this.fb
  //       .login(["email"])
  //       .then((response: FacebookLoginResponse) => {
  //         this.loginWithFacebook(response.authResponse.accessToken);
  //       })
  //       .catch((error) => {
  //         alert("error:" + JSON.stringify(error));
  //       });
  //   } else {
  //     this.fbLogin();
  //   }
  // }
  // loginWithFacebook(accessToken) {
  //   this.loginType = "Login with Facebook";
  //   const credential = firebase.auth.FacebookAuthProvider.credential(
  //     accessToken
  //   );
  //   return firebase.auth().signInWithCredential(credential);
  // }
  // fbLogin(): Promise<any> {
  //   this.loginType = "Login with Facebook";
  //   return firebase
  //     .auth()
  //     .signInWithPopup(new firebase.auth.FacebookAuthProvider());
  // }
}
