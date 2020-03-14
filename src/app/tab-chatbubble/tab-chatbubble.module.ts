import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabChatbubblePageRoutingModule } from './tab-chatbubble-routing.module';

import { TabChatbubblePage } from './tab-chatbubble.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabChatbubblePageRoutingModule
  ],
  declarations: [TabChatbubblePage]
})
export class TabChatbubblePageModule {}
