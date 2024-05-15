const INITIAL_STATE = {
  users: [],
  filter: "",
};

export const mailboxReduser = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'mailbox/ADD_USER' : {
            return {...state, 
                users:[...state.users, action.payload]}
        }
        case 'mailbox/DELETE_USER' : {
            return {...state, 
                users: state.users.filter((user) => user.id !== action.payload)}
        }
        case 'mailbox/FILTER_USER' : {
            return {...state, 
                filter: action.payload}
        }
  
        default: return state;
    }

 
};
