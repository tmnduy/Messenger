import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPeoplePageRoutingModule } from './tab-people-routing.module';

import { TabPeoplePage } from './tab-people.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPeoplePageRoutingModule
  ],
  declarations: [TabPeoplePage]
})
export class TabPeoplePageModule {}
