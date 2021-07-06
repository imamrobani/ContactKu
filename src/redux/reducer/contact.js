const iniStateContact = {
  createContact: '',
  contact: [],
  deleteContact: '',
  putContact: ''
}

export const contactReducer = (state = iniStateContact, action) => {
  switch (action.type) {
    case 'POST_CONTACT': {
      return { ...state, createContact: action.value }
    }
    case 'GET_CONTACT': {
      return { ...state, contact: action.value }
    }
    case 'DELETE_CONTACT': {
      return { ...state, deleteContact: action.value }
    }
    case 'EDIT_CONTACT': {
      return { ...state, putContact: action.value }
    }
  }
  return state
}