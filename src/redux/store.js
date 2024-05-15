import { combineReducers, createStore } from "redux";
import { mailboxReduser } from "./mailbox/mailboxReducer";

const rootReduser = combineReducers({
    mailbox: mailboxReduser
})

export const store = createStore(rootReduser)
