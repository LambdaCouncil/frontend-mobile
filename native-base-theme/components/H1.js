// @flow

import variables, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variables.councils

  return {
    color: variables.councils.text.nearBlack,
    fontSize: variables.fontSizeH1,
    lineHeight: variables.lineHeightH1,
    marginVertical: 10
  }

}
