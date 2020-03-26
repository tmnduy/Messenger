import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
      {
        path: 'tab-chatbubble',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-chatbubble/tab-chatbubble.module').then( m => m.TabChatbubblePageModule)
          }
        ]
      },
      {
        path: 'tab-people',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-people/tab-people.module').then( m => m.TabPeoplePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/index/tab-chatbubble',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/index/tab-chatbubble',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
