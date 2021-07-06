import {
  getContact as getContactApi
} from '../../api/contact/ContactApi'
import { showMessage } from '../../utils'
import { setLoading, setLoadingGlobal } from './global'


export const getContact = () => async (dispatch) => {
  dispatch(setLoadingGlobal(true))
  try {
    const response = await getContactApi()
    dispatch(setLoadingGlobal(false))
    console.log('getContact: ', response)
    dispatch({ type: 'GET_CONTACT', value: response.data.data })
  } catch (error) {
    dispatch(setLoadingGlobal(false))
    const title = "Error"
    const message = error?.message
    showMessage(title, message)
  }
}