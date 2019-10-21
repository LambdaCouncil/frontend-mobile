// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {

  const { ui, text } = variables.councils

  const h3Theme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH3,
    lineHeight: variables.lineHeightH3,
    '.submit': {
      color: text.greal,
      marginTop: 25
    }
  };

  return h3Theme;
};
