import { Alert, Text, View } from "react-native";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { globalStyles } from "../../../config/theme/theme";
import { Button } from "../../components/ui/Button";
import { showPrompt } from "../../../config/adapters/prompt.adapter";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const AlertScreen = () => {

  const { isDark } = useContext(ThemeContext);


  const createTwoButtonAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { userInterfaceStyle: isDark ? 'dark' : 'light' },
    );
  }


  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {
      cancelable: true,
      onDismiss() {
        console.log('inDismiss')
      },
      userInterfaceStyle: isDark ? 'dark' : 'light',
    }
  );

  const onShowPrompt = () => {
    showPrompt({
      title: 'nose',
      subTitle: 'nose x2',
      buttons: [
        { text: 'ok', onPress: () => console.log('ok')}
      ],
      placeholder: 'Placeholder'
    })


    // Alert.prompt(
    //   'Correo electronico',
    //   'asdfasfd asd asdf asdf',
    //   (valor: string) => console.log({valor}),
    // );
  };

  return (
    <CustomView style={ globalStyles.globalMargin }>
      <Title safe text="Alertas" />

      <Button
        text="Alerta - 2 Botones"
        onPress={ createTwoButtonAlert }
      />

      <View style={{ height: 10 }}/>

      <Button
        text="Alerta - 3 Botones"
        onPress={ createThreeButtonAlert }
      />

      <View style={{ height: 10 }}/>

      <Button
        text="Prompt- Input"
        onPress={ onShowPrompt }
      />

      <View style={{ height: 10 }}/>

    </CustomView>
  )
}
