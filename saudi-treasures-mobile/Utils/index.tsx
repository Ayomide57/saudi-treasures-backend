import { Alert } from "react-native";

interface IAlertComponent {
    title: string;
    message: string;
    btnText?: string;
    btnFunction?: () => void
}
export const alertComponent = ({title, message, btnText, btnFunction}: IAlertComponent) => {
    return Alert.alert(title, message, [{
        text: btnText,
        onPress: btnFunction
    }])

}