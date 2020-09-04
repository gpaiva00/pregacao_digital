import { StyleSheet } from 'react-native';
import metrics from '../../styles/metrics';
import general from '../../styles/general';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    paddingHorizontal: metrics.margin,
  },
  input: {
    ...general.defaultInput,
  },
  icon: {
    // marginRight: metrics.smallMargin,
  },
  textInput: {
    width: '91%',
    padding: metrics.smallMargin,
    height: metrics.inputHeight,
  },
});

export default styles;
