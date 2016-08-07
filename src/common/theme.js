import {
  getTheme
} from 'react-native-material-kit'

import { Platform } from 'react-native'

const theme = getTheme()

export default {
  ...theme,
  /**
   * `width: null` required by later version of RN
   */
  cardImageStyle: {
    ...theme.cardImageStyle,
    width: null
  },
  cardContainer: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F1F1F1',
    padding: 20,
    marginTop: Platform.OS === 'android' ? 56 : 0
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  }
}
