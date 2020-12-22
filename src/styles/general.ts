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
    marginVertical: metrics.mediumMargin,
    color: colors.title,
  },
  label: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    marginBottom: metrics.mediumMargin,
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
    borderRadius: metrics.radius,
    flexDirection: 'row',
    paddingLeft: metrics.mediumMargin,
    paddingRight: metrics.mediumMargin,
  },
  defaultInput: {
    backgroundColor: '#fff',
    height: metrics.inputHeight,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    paddingHorizontal: metrics.smallMargin,
    fontSize: fonts.regular,
    flexDirection: 'row',
    alignItems: 'center',
  },
  defaultButtonText: {
    color: '#fff',
    fontSize: fonts.big,
    fontWeight: 'bold',
  },
  defaultTile: {
    backgroundColor: colors.primary,
    padding: metrics.smallMargin,
    marginHorizontal: metrics.tinyMargin,
    shadowColor: '#000',
    shadowOffset: {
      width: -3,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    borderRadius: metrics.radius,
  },
});

// export default general;
