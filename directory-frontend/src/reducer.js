import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const companyReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_COMPANIES':
      return action.payload;
    case 'FETCH_COMPANY':
      return action.payload;
    case 'EDIT_COMPANY':
      return action.payload;
    case 'CREATE_COMPANY':
      return action.payload;
    case 'SELECTED_COMPANY':
      return action.payload;
    default: {
      return state;
    }
  }
}

export default combineReducers({
  companies: companyReducer,
  form: formReducer
});