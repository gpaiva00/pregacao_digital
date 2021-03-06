import { StyleSheet } from 'react-native';
import metrics from '../../styles/metrics';
import general from '../../styles/general';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: metrics.doubleMargin,
  },
  inputGroup: {
    marginBottom: metrics.margin,
  },
  label: {
    ...general.label,
  },
  dateTimeGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateGroup: {
    flex: 2,
  },
  timeGroup: {
    flex: 1,
  },
  input: {},
  textarea: {
    ...general.defaultInput,
    height: 80,
  },
});

export default styles;
