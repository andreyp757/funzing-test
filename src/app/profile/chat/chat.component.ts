import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { iAppState } from '../../shared/app.state';
import { iMessages, Message } from '../../shared/models/message.model';
import { AddMessage, LoadMessages } from '../../shared/actions/message.action';
import { LocalStorage } from '../../shared/services/local-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public currentMsg: string = '';
  public chatSet: Observable<iMessages>;

  constructor(private navCtrl: NavController, 
            private route: ActivatedRoute,
            private store: Store<iAppState>,
            private localStorage: LocalStorage) {
  }

  ngOnInit() {
    let userId = this.route.snapshot.paramMap.get('id');
    let storageData = this.localStorage.get(userId + '-chat-messages');
    storageData && this.store.dispatch(new LoadMessages(storageData))
    this.chatSet = this.store.select('chatSet');
    this.chatSet.subscribe(data => {
      data.messages.length && this.localStorage.set(userId + '-chat-messages', data.messages)
    });
  }

  goBack() {
    this.navCtrl.navigateBack('/profile');
  }

  sendMsg(){
    if(this.currentMsg === '') return; 
    let msgToSend = new Message(this.currentMsg);
    this.store.dispatch(new AddMessage(msgToSend));
    this.currentMsg = '';
  }

}
