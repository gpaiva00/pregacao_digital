import { StyleSheet } from 'react-native';
import colors from './colors';
import fonts from './fonts';
import metrics from './metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  sessionTitle: {
    fontSize: fonts.big,
    fontWeight: 'bold',
    marginBottom: metrics.margin,
    color: colors.title,
  },
  lable: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    marginBottom: metrics.margin,
    color: colors.title,
  },
  infoText: {
    fontSize: fonts.medium,
    color: colors.info,
  },
  defaultButton: {
    backgroundColor: colors.primary,
    height: metrics.buttonHeight,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: metrics.radius,
  },
  defaultInput: {
    backgroundColor: '#fff',
    height: metrics.inputHeight,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    padding: metrics.smallMargin,
    fontSize: fonts.regular,
  },
  defaultButtonText: {
    color: '#fff',
    fontSize: fonts.big,
    fontWeight: 'bold',
  },
});

// export default general;
