import { createContext, 
  // useState , 
  useEffect , useReducer} from "react";
import { onAuthStateChangedListener ,  createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

import { creatAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

const USER_ACTION_TYPES={
  SET_CURRENT_USER :'SET_CURRENT_USER',
}

// reducer returns in object means in {}
const UserReducer =(state , action) => {
  const {type , payload} =action;

  switch(type){
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser:payload
      }
      default:
        throw new Error(`unhandled type ${type}`);
  }

};

const INITIAL_STATE={
  currentUser: null,
}

export const UserProvider = ({ children }) => {
  const [{currentUser} , dispatch] = useReducer(UserReducer , INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch(creatAction( USER_ACTION_TYPES.SET_CURRENT_USER , user));
  };

  // const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

 useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
       if(user){
        createUserDocumentFromAuth(user);
       }
        setCurrentUser(user);
    });
    
    return unsubscribe;

  },[]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

