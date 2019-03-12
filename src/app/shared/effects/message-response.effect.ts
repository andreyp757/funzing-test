import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, timer } from 'rxjs';
import { filter, switchMap, mergeMap } from 'rxjs/operators';

import { MESSAGE_ACTION, AddMessage } from '../actions/message.action';
import { Message } from '../models/message.model';

@Injectable()
export class MessageResponse {

    private dummyMessages = [
        'Hello!',
        'How are you doing?',
        'It is very nice to meet you!',
        'No worries!',
        'Have a good day!'
    ]

    constructor(private actions$: Actions) {
    }

    @Effect() messageResponse$: Observable<any> = this.actions$.pipe(
        ofType<AddMessage>(MESSAGE_ACTION.ADD_MESSAGE),
        filter(action => !action.payload.host),
        switchMap(action => timer(1000)),
        mergeMap(action => {
            let msg = this.dummyMessages.shift();
            this.dummyMessages.push(msg);
            return [{
                type: MESSAGE_ACTION.ADD_MESSAGE,
                payload: new Message(msg, null, true)
            }]
        })
    )
    
}

