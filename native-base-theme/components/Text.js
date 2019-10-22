// @flow

import variable, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variable.councils

  return {
    fontSize: variable.DefaultFontSize,
    fontFamily: variable.fontFamily,
    color: variable.textColor,
    '.note': {
      color: '#a7a7a7',
      fontSize: variable.noteFontSize
    },
    '.loginButton': {
      backgroundColor: ui.eggshell,
      color: text.greal,
      textAlign: 'center',
      padding: 10,
      paddingBottom: 15,
      fontSize: 35
    },
    '.registerButton': {
      borderRadius: 7.5,
      backgroundColor: ui.greal,
      padding: 10,
      paddingBottom: 15,
      textAlign: 'center',
      textAlignVertical: 'center',
      color: text.white,
      fontSize: 35
    },
  }

}
