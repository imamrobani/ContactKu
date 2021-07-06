import {
  getContact as getContactApi,
  postContact,
  deleteContact as deleteContactApi
} from '../../api/contact/ContactApi'
import { showMessage } from '../../utils'
import { setLoading, setLoadingGlobal } from './global'

export const createContact = (param, navigation) => async (dispatch) => {
  dispatch(setLoadingGlobal(true))
  try {
    const response = await postContact(param)
    dispatch(setLoadingGlobal(false))
    // console.log('createContact: ', response)
    const status = response.status
    if (status === 200 || status === 201) {
      navigation.goBack()
      dispatch(getContact())
    }
    dispatch({ type: 'POST_CONTACT', value: response.data })
  } catch (error) {
    dispatch(setLoadingGlobal(false))
    // console.log('error-createContact: ', error.response)
    const title = "Error"
    const message = error?.response?.data?.message
    showMessage(title, message)
  }
}

export const getContact = () => async (dispatch) => {
  dispatch(setLoadingGlobal(true))
  try {
    const response = await getContactApi()
    dispatch(setLoadingGlobal(false))
    // console.log('getContact: ', response)
    dispatch({ type: 'GET_CONTACT', value: response.data.data })
  } catch (error) {
    dispatch(setLoadingGlobal(false))
    const title = "Error"
    const message = error?.message
    showMessage(title, message)
  }
}

export const deleteContact = (param, navigation) => async (dispatch) => {
  dispatch(setLoadingGlobal(true))
  try {
    const response = await deleteContactApi(param)
    dispatch(setLoadingGlobal(false))
    console.log('deleteContact: ', response)
    const status = response.status
    // if (status === 200 || ) {
    //   navigation.goBack()
    // }
    dispatch({ type: 'DELETE_CONTACT', value: response.data })
  } catch (error) {
    console.log('error-deleteContact: ', error.response)
    dispatch(setLoadingGlobal(false))
    const title = "Error"
    const message = error?.message
    showMessage(title, message)
  }
}

