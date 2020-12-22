import { StyleSheet } from 'react-native';
import metrics from '../../../styles/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullHeightScrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: metrics.margin,
    paddingTop: metrics.margin,
    paddingBottom: metrics.doubleMargin,
  },
  fullscreenChildren: {
    flex: 1,
  },
});

export default styles;
