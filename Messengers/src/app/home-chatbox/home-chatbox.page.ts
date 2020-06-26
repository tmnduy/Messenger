import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-chatbox",
  templateUrl: "./home-chatbox.page.html",
  styleUrls: ["./home-chatbox.page.scss"],
})
export class HomeChatboxPage implements OnInit {
  constructor(public Router: Router) {}

  ngOnInit() {}
  OpenProfileFriend() {
    this.Router.navigate(["/profile-friend"]);
  }
}
