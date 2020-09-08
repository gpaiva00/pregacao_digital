import { StyleSheet } from 'react-native';
import metrics from '../../../styles/metrics';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import general from '../../../styles/general';

const styles = StyleSheet.create({
  container: {
    width: metrics.screenWidth,
    paddingHorizontal: metrics.margin,
    // marginBottom: metrics.margin,
  },
  title: {
    ...general.sessionTitle,
  },
  item: {
    ...general.defaultTile,
    height: 140,
    width: 160,
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: metrics.smallMargin,
  },
  itemTitle: {
    color: colors.cardTitle,
    fontWeight: 'bold',
    fontSize: fonts.regular,
  },
  itemDate: {
    color: colors.cardTitle,
    fontSize: fonts.medium,
  },
  itemBody: {
    flex: 1,
    justifyContent: 'center',
  },
  itemData: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  itemText: {
    fontSize: fonts.regular,
    color: '#fff',
  },
  itemIcon: {
    color: '#fff',
    marginRight: metrics.smallMargin,
  },
  itemFooter: {
    marginTop: metrics.smallMargin,
    alignItems: 'flex-end',
  },
  itemButton: {},
  itemButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
