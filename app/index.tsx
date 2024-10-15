import {convertDecimalNumberToHexadecimal, getRandomNumber} from '@/utils/utils';
import {useState} from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';

export default function Index() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#323232');

  const generateBackgroundColor = () => {
    const randomDecimalNumber = getRandomNumber();
    const hexadecimalNumber = convertDecimalNumberToHexadecimal(randomDecimalNumber);
    const newBackgroundColor = `#${hexadecimalNumber}`;
    setBackgroundColor(newBackgroundColor);
  };

  const generateTextColor = () => {
    const randomDecimalNumber = getRandomNumber();
    const hexadecimalNumber = convertDecimalNumberToHexadecimal(randomDecimalNumber);
    const newTextColor = `#${hexadecimalNumber}`;
    setTextColor(newTextColor);
  };

  return (
    <TouchableWithoutFeedback onPress={generateBackgroundColor} onLongPress={generateTextColor}>
      <View style={[styles.container, {backgroundColor}]}>
        <Text style={[styles.text, {color: textColor}]}>Hello there</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#323232',
    fontSize: 22,
    lineHeight: 26,
  },
});
