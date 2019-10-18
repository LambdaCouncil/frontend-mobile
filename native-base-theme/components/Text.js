// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {

  const { ui, text } = variables.councils

  const textTheme = {
    fontSize: variables.DefaultFontSize,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    '.note': {
      color: '#a7a7a7',
      fontSize: variables.noteFontSize
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
  };

  return textTheme;
};
