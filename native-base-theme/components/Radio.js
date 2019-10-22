// @flow

import { Platform } from 'react-native'

import variables, { PLATFORM } from '../variables/commonColor'

export default _ => {

  const { ui, text } = variables.councils

  return {
    '.selected': {
      'NativeBase.IconNB': {
        color:
          Platform.OS === PLATFORM.IOS
            ? variables.radioColor
            : variables.radioSelectedColorAndroid,
        lineHeight:
          Platform.OS === PLATFORM.IOS ? 25 : variables.radioBtnLineHeight,
        height: Platform.OS === PLATFORM.IOS ? 20 : undefined
      }
    },
    'NativeBase.IconNB': {
      color: Platform.OS === PLATFORM.IOS ? 'transparent' : undefined,
      lineHeight:
        Platform.OS === PLATFORM.IOS ? undefined : variables.radioBtnLineHeight,
      fontSize:
        Platform.OS === PLATFORM.IOS ? undefined : variables.radioBtnSize
    }
  }

}
