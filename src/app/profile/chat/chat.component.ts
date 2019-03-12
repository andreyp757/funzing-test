import { Component, OnInit, ViewChild, QueryList, ViewChildren, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, IonContent } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { iAppState } from '../../shared/app.state';
import { Message } from '../../shared/models/message.model';
import { AddMessage, LoadMessages } from '../../shared/actions/message.action';
import { LocalStorage } from '../../shared/services/local-storage.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild(IonContent) contentArea: IonContent;
  @ViewChildren('UImessagesList') messagesList: QueryList<any>;

  public currentMsg: string = '';
  public chatSet: Observable<Message[]>;

  constructor(private navCtrl: NavController, 
            private route: ActivatedRoute,
            private store: Store<iAppState>,
            private localStorage: LocalStorage) {
  }

  ngOnInit() {
    let userId = this.route.snapshot.paramMap.get('id');
    let storageData = this.localStorage.get(userId + '-chat-messages');
    storageData && this.store.dispatch(new LoadMessages(storageData));
    this.chatSet = this.store.select('chatSet').pipe(map(data => data.messages));
    // TODO Invistigate is it a correct place to save messages?
    this.chatSet.subscribe(messages => {
      messages.length && this.localStorage.set(userId + '-chat-messages', messages);
    });
  }

  ngAfterViewInit() {
    this.contentArea.scrollToBottom(100);
    this.messagesList.changes.subscribe(() => {
      this.contentArea.scrollToBottom(100);
    })
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
