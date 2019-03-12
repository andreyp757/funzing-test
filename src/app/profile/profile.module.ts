import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: ':id',
    component: ChatComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePage, ChatComponent]
})
export class ProfilePageModule {}
