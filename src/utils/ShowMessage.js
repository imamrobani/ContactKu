import { showMessage as showToast } from "react-native-flash-message";
import { Colors } from "../consts";

export const showMessage = (message, description, type, onPress = () => { }) => {

  showToast({
    message,
    description,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? Colors.topaz : Colors.fadedRed,
    duration: 2500,
    onPress: onPress
  });
}