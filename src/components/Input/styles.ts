import { StyleSheet } from 'react-native';
import metrics from '../../styles/metrics';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
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
});

export default styles;
