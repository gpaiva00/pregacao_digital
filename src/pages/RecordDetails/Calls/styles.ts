import { StyleSheet } from 'react-native';
import metrics from '../../../styles/metrics';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import general from '../../../styles/general';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noText: {
    color: colors.info,
    fontSize: fonts.regular,
  },
  callsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: metrics.margin,
  },
  callsTitle: {
    ...general.sessionTitle,
  },
  title: {
    ...general.sessionTitle,
  },
  item: {
    ...general.defaultTile,
    marginHorizontal: 0,
    marginVertical: metrics.tinyMargin,
    height: 150,

    shadowOffset: {
      width: 0,
      height: 3,
    },
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
  itemBody: {},
  itemData: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  itemDataComments: {
    maxWidth: '90%',
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
