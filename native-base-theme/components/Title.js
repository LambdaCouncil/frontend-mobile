// @flow

import { Platform } from 'react-native';

import variables, { PLATFORM } from './../variables/commonColor';

export default _ => {

  const { ui, text } = variables.councils

  return {
    fontSize: variables.titleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.titleFontColor,
    fontWeight: Platform.OS === PLATFORM.IOS ? '700' : undefined,
    textAlign: 'center',
    paddingLeft: Platform.OS === PLATFORM.IOS ? 4 : 0,
    marginLeft: Platform.OS === PLATFORM.IOS ? undefined : -3,
    paddingTop: 1
  }

}
