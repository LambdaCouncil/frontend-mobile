// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {

  const { ui, text } = variables.councils

  const h2Theme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH2,
    lineHeight: variables.lineHeightH2,
    textAlign: 'center'
  };

  return h2Theme;
};
