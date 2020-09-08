import { StyleSheet } from 'react-native';
import metrics from '../../styles/metrics';
import general from '../../styles/general';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: metrics.doubleMargin,
    justifyContent: 'center',
    paddingBottom: metrics.margin,
  },
  inputGroup: {
    marginBottom: metrics.margin,
  },
  label: {
    ...general.label,
  },
});

export default styles;
