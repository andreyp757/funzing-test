import { Message } from './models/message.model';

export interface iAppState {
    chatSet: {
        messages: Message[]
    }
}