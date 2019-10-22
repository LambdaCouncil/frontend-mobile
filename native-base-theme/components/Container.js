// @flow

import { Platform, Dimensions } from 'react-native'

import variables, { PLATFORM } from './../variables/commonColor'

const deviceHeight = Dimensions.get('window').height

export default _ => {

  const { ui, text } = variables.councils

  return {
    flex: 1,
    height: Platform.OS === PLATFORM.IOS ? deviceHeight : deviceHeight - 20,
    backgroundColor: variables.containerBgColor
  }

}
