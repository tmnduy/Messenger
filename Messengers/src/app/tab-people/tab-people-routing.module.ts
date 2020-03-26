import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPeoplePage } from './tab-people.page';

const routes: Routes = [
  {
    path: '',
    component: TabPeoplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPeoplePageRoutingModule {}
