import { createStore, combineReducers } from 'redux';

const simpleReducer = (state = {}, action: any) => {
  return {
    user: {
      name: 'redux',
    },
  };
};
interface InterfaceAction {
  type: string;
  [propName: string]: any;
}

function user(state = { name: 'redux' }, action) {
  switch (action.type) {
    case 'CHANGE_USER_NAME':
      return {
        ...state,
        name: action.name,
      };
  }

  return state;
}

function project(state = { name: 'min-react' }, action) {
  switch (action.type) {
    case 'CHANGE_PROJECT_NAME':
      return {
        ...state,
        name: action.name,
      };
  }

  return state;
}

const rootReducer = combineReducers({
  user,
  project,
});

const store = createStore(rootReducer);

// store.subscribe(function () {
//   alert('改变');
// });

console.log(store.getState());

export default store;
