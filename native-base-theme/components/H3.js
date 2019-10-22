// @flow

import variables, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variables.councils

  return {
    color: variables.textColor,
    fontSize: variables.fontSizeH3,
    lineHeight: variables.lineHeightH3,
    '.submit': {
      color: text.greal,
      marginTop: 25
    }
  }

}
