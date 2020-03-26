import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeChatboxPage } from './home-chatbox.page';

const routes: Routes = [
  {
    path: '',
    component: HomeChatboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeChatboxPageRoutingModule {}
