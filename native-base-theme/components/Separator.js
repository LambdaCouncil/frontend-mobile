// @flow

import variables, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variables.councils

  return {
    '.group': {
      height: 50,
      paddingVertical: variables.listItemPadding - 8,
      paddingTop: variables.listItemPadding + 12,
      '.bordered': {
        height: 50,
        paddingVertical: variables.listItemPadding - 8,
        paddingTop: variables.listItemPadding + 12
      }
    },
    '.bordered': {
      '.noTopBorder': {
        borderTopWidth: 0
      },
      '.noBottomBorder': {
        borderBottomWidth: 0
      },
      height: 35,
      paddingTop: variables.listItemPadding + 2,
      paddingBottom: variables.listItemPadding,
      borderBottomWidth: variables.borderWidth,
      borderTopWidth: variables.borderWidth,
      borderColor: variables.listBorderColor
    },
    'NativeBase.Text': {
      fontSize: variables.tabBarTextSize - 2,
      color: '#777'
    },
    '.noTopBorder': {
      borderTopWidth: 0
    },
    '.noBottomBorder': {
      borderBottomWidth: 0
    },
    height: 38,
    backgroundColor: '#F0EFF5',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: variables.listItemPadding + 5
  }

}
