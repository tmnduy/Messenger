import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabChatbubblePage } from './tab-chatbubble.page';

const routes: Routes = [
  {
    path: '',
    component: TabChatbubblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabChatbubblePageRoutingModule {}
