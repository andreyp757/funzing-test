import * as moment from 'moment';

export class Message {
    constructor(
        public value: string, 
        public date?: string, 
        public host?: boolean
    ){
        this.value = value;
        this.date = date ? date : moment(new Date).format('LLL'); // TODO ajust normal format
        this.host = host ? true : false;
    }
}

export interface iMessages {
    messages: Message[]
}