// @flow

import variables, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variables.councils

  return {
    '.tabIcon': {
      height: undefined
    },
    '.vertical': {
      height: 60
    },
    'NativeBase.Button': {
      '.transparent': {
        'NativeBase.Text': {
          fontSize: variables.tabFontSize,
          color: variables.sTabBarActiveTextColor,
          fontWeight: '400'
        },
        'NativeBase.IconNB': {
          color: variables.sTabBarActiveTextColor
        }
      },
      'NativeBase.IconNB': {
        color: variables.sTabBarActiveTextColor
      },
      'NativeBase.Text': {
        fontSize: variables.tabFontSize,
        color: variables.sTabBarActiveTextColor,
        fontWeight: '400'
      },
      '.isTabActive': {
        'NativeBase.Text': {
          fontWeight: '900'
        }
      },
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: null,
      borderBottomColor: 'transparent',
      backgroundColor: variables.tabBgColor
    },
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#ccc',
    backgroundColor: variables.tabBgColor
  }

}
