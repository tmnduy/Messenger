import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'home',
   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'tab-chatbubble',
    loadChildren: () => import('./tab-chatbubble/tab-chatbubble.module').then( m => m.TabChatbubblePageModule)
  },
  {
    path: 'tab-people',
    loadChildren: () => import('./tab-people/tab-people.module').then( m => m.TabPeoplePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
