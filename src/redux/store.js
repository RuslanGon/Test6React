// import { combineReducers} from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";

import { configureStore } from "@reduxjs/toolkit";

import { mailboxReduser } from "./mailbox/mailboxReducer";

// const rootReduser = combineReducers({
//     mailbox: mailboxReduser
// })

// const enhancer = devToolsEnhancer()
// export const store = createStore(rootReduser, enhancer)


export const store = configureStore({
    reducer: {
        mailbox: mailboxReduser
    }
  });