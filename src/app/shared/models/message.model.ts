import * as moment from 'moment';

export class Message {
    constructor(
        public value: string, 
        public date?: string, 
        public host?: boolean
    ){
        this.value = value;
        this.date = date ? date : moment(new Date).format('DD.MM.YY, h:mm a');
        this.host = host ? true : false;
    }
}

export interface iMessages {
    messages: Message[]
}