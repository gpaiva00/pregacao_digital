import { StyleSheet } from 'react-native';
import metrics from '../../../styles/metrics';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import general from '../../../styles/general';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    paddingHorizontal: metrics.margin,
    paddingBottom: metrics.margin,
  },
  title: {
    ...general.sessionTitle,
  },
  item: {
    ...general.defaultTile,
    height: 150,
    width: 250,
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: metrics.smallMargin,
  },
  itemTitle: {
    color: colors.cardTitle,
    fontWeight: 'bold',
    fontSize: fonts.regular,
  },
  itemDate: {
    color: colors.date,
    fontSize: fonts.medium,
  },
  itemBody: {
    flex: 1,
  },
  itemData: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  itemText: {
    fontSize: fonts.regular,
    color: colors.cardTitle,
  },
  itemIcon: {
    color: colors.cardTitle,
    marginRight: metrics.smallMargin,
  },
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: metrics.smallMargin,
  },
  itemButton: {},
  itemButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
