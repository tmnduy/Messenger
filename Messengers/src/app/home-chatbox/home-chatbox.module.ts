import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeChatboxPageRoutingModule } from './home-chatbox-routing.module';

import { HomeChatboxPage } from './home-chatbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeChatboxPageRoutingModule
  ],
  declarations: [HomeChatboxPage]
})
export class HomeChatboxPageModule {}
