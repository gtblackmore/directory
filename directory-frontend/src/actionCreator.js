import history from './history';

export const fetchCompanies = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/companies')
      .then(res => res.json())
      .then(data => {
        const companies = data;

        dispatch({ type: "FETCH_COMPANIES", payload: companies });
      }
    )
  }
};

export const createCompany = (formValues) => {
  return (dispatch) => {
    fetch('http://localhost:3001/companies', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify(formValues)
    })
    .then(response => response.json()) 
    .then(data => {
      const company = data;

      dispatch({ type: "CREATE_COMPANY", payload: company });
      history.push('/')
    })
  }
};

export const fetchCompany = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/companies/${id}`)
      .then(res => res.json())
      .then(data => {
        const company = data;

        dispatch({ type: "FETCH_COMPANY", payload: company })
      }
    )
  }
};

export const editCompany = (id, formValues) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/companies/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify(formValues)
    })
    .then(response => response.json()) 
    .then(data => {
      const company = data;

      dispatch({ type: "EDIT_COMPANY", payload: company });
      history.push('/')
    })
  }
};

export const selectCompany = (company) => {
  return {
    type: 'SELECTED_COMPANY',
    payload: company
  }
};