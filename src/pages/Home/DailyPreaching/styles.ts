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
    height: 180,
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
    color: colors.cardTitle,
    fontSize: fonts.medium,
  },
  itemBody: {
    flex: 1,
    // justifyContent: 'space-around',
  },
  itemData: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  itemText: {
    fontSize: fonts.medium,
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
