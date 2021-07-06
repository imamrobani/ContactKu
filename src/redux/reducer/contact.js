const iniStateContact = {
  createContact: '',
  contact: []
}

export const contactReducer = (state = iniStateContact, action) => {
  switch (action.type) {
    case 'POST_CONTACT': {
      return { ...state, createContact: action.value }
    }
    case 'GET_CONTACT': {
      return { ...state, contact: action.value }
    }
  }
  return state
}