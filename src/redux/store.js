import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

import { mailboxReduser } from "./mailbox/mailboxReducer";

const rootReduser = combineReducers({
    mailbox: mailboxReduser
})

const enhancer = devToolsEnhancer()

export const store = createStore(rootReduser, enhancer)
