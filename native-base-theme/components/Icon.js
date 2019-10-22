// @flow

import variable, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variable.councils

  return {
    fontSize: variable.iconFontSize,
    color: variable.textColor
  }
}
