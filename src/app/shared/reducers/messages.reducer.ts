
import { ActionReducer } from '@ngrx/store';
import { MESSAGE_ACTION, MessageActions } from '../actions/message.action';

const initialState = {
    messages: []
}

export const messagesReducer: ActionReducer<any> = (state = initialState, action: MessageActions) => {
    switch (action.type) {
        case MESSAGE_ACTION.ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case MESSAGE_ACTION.LOAD_MESSAGES:
            return {
                ...state,
                messages: [...action.payload]
            }
        default:
            return state;
    }
};
