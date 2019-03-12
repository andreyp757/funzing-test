import { Action } from '@ngrx/store';
import { Message } from '../models/message.model';

export namespace MESSAGE_ACTION {
    export const ADD_MESSAGE = 'ADD_MESSAGE';
    export const LOAD_MESSAGES = 'LOAD_MESSAGES';
}

export class AddMessage implements Action {
    readonly type = MESSAGE_ACTION.ADD_MESSAGE;
    constructor (public payload: Message) {
    }
}

export class LoadMessages implements Action {
    readonly type = MESSAGE_ACTION.LOAD_MESSAGES;
    constructor (public payload: Message[]) {
    }
}

export type MessageActions = AddMessage | LoadMessages