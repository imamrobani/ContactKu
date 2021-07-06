const initGlobalState = {
  isLoading: false,
  isLoadingGlobal: false
}

export const globalReducer = (state = initGlobalState, action) => {
  switch (action.type) {
    case 'SET_LOADING': {
      return { ...state, isLoading: action.value }
    }
    case 'SET_LOADING_GLOBAL': {
      return { ...state, isLoadingGlobal: action.value }
    }
  }
  return state
}