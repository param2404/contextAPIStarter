import { createContext, useEffect, useReducer } from "react";
import { loginAction } from "../api/auth";

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  }
};

const reducer = (state, action) => (
  handlers[action.type] ? handlers[action.type](state, action) : state
);

const AuthContext = createContext({
  ...initialState,
  login: () => Promise.resolve()
});

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {

    const initialize = () => {
      try {
        let accessToken = true;
        if (accessToken) {
          let user = { id: 1, name: 'Rahul Agarwal' };

          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user
            }
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null
            }
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    };

    initialize();
  }, []);

  const login = async () => {
    const data = await loginAction();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;