import { AngularFireModule } from "@angular/fire";
import { Router, RouterLink } from "@angular/router";
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
  name: string;
  birthday: Date;
  phone: string;
  address: string;
  constructor(public route: Router, public afuth: AngularFireAuth, public alert: AlertController) {}
  ngOnInit() {}
  controller = document.querySelector("ion-alert-controller");
  check = false;
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
  SignUp() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.AlertSuccess();
        this.route.navigate(["home"]);
        // this.check = true;
        this.route.navigateByUrl('home');
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

      firebase.database().ref('Profile').push({
        email: this.email,
        name: this.name,
        birthday: this.birthday,
        phone: this.phone,
        address: this.phone,
      }).then(()=>{
        console.log('success');
      })

  //     if (this.check==true)
  //     {
  //       this.route.navigateByUrl('home');
  //     }
  }


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

  handleFirstNameValue(event) {}

  handleLastNameValue(event) {}
}
