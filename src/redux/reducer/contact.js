const iniStateContact = {
  contact: []
}

export const contactReducer = (state = iniStateContact, action) => {
  switch (action.type) {
    case 'GET_CONTACT': {
      return { ...state, contact: action.value }
    }
  }
  return state
}