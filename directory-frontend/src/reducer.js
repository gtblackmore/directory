import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
  companies: [],
  selectedCompany: []
}

const companyReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_COMPANIES':
      return {
        companies: action.payload
      }
    case 'FETCH_COMPANY':
      return {
        companies: [...state.companies],
        selectedCompany: action.payload
      }
    case 'EDIT_COMPANY':
      return {
        companies:[...state.companies, action.payload]
      }
    case 'CREATE_COMPANY':
      return {
        companies: [...state.companies, action.payload]
      }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  companies: companyReducer,
  form: formReducer
});