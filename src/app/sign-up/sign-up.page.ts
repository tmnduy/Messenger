import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  
  constructor( public route: Router) { }
  ngOnInit() {
  }
    controller = document.querySelector('ion-alert-controller');
   

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

    handleFirstNameValue(event) {
    }

    handleLastNameValue(event) {
    }
}
