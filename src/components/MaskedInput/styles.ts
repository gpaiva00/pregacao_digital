import { StyleSheet } from 'react-native';
import metrics from '../../styles/metrics';
import general from '../../styles/general';

const styles = StyleSheet.create({
  input: {
    ...general.defaultInput,
    width: '100%',
  },
  textInput: {
    width: '91%',
    padding: metrics.smallMargin,
    height: metrics.inputHeight,
  },
});

export default styles;
