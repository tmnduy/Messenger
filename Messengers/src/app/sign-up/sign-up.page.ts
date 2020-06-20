import { AngularFireModule } from "@angular/fire";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { HomePage } from "../home/home.page";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.page.html",
  styleUrls: ["./sign-up.page.scss"],
})
export class SignUpPage implements OnInit {
  email: string;
  password: string;
  constructor(
    public route: Router,
    public afuth: AngularFireAuth,
    public alert: AlertController
  ) {}
  ngOnInit() {}
  controller = document.querySelector("ion-alert-controller");

  // processForm(event) {
  //   event.preventDefault();
  //   this.controller.create({
  //     header: 'Account Created',
  //     message: `Created account for: <b>${firstName} ${lastName}</b>`,
  //     buttons: [{
  //       text: 'OK'
  //     }]
  //   }).then(alert => alert.present());
  // }
  async AlertSuccess() {
    const alert = await this.alert.create({
      cssClass: "my-custom-class",
      subHeader: "Thông báo",
      message: "Đăng ký thành công.",
      buttons: ["OK"],
    });

    await alert.present();
  }
  async AlertError() {
    const alert = await this.alert.create({
      cssClass: "my-custom-class",
      subHeader: "Lỗi",
      message: "Email đã được sử dụng.",
      buttons: ["OK"],
    });

    await alert.present();
  }

  SignUp() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.AlertSuccess();
        this.route.navigate(["home"]);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        this.AlertError();
        console.log(errorMessage);
        console.log(errorCode);
      });
  }

  handleFirstNameValue(event) {}

  handleLastNameValue(event) {}
}
