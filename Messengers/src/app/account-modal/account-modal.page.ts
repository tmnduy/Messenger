import {
  ModalController,
  AlertController,
  NavController,
} from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { HomePage } from "../home/home.page";
import { Router } from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: "app-account-modal",
  templateUrl: "./account-modal.page.html",
  styleUrls: ["./account-modal.page.scss"],
})
export class AccountModalPage implements OnInit {
  constructor(
    public modalController: ModalController,
    public alertController: AlertController,
    public nvaCtrl: NavController,
    public route: Router
  ) {}

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Đăng xuất",
      message: "Bạn chắc chắn muốn đăng xuất?",
      buttons: [
        {
          text: "Đồng ý",
          role: "Ok",
          handler: () => {
            firebase
              .auth()
              .signOut()
              .then(function () {
                // Sign-out successful.
              })
              .catch(function (error) {
                // An error happened.
              });
            this.route.navigateByUrl("/home");
          },
        },
        {
          text: "Cancel",
          role: "Cancel",
        },
      ],
    });
    await alert.present();
  }

  ngOnInit() {}
}
