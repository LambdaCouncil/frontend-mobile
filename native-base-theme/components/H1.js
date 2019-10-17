// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {
  const h1Theme = {
    color: variables.councils.text.greal,
    fontSize: variables.fontSizeH1,
    lineHeight: variables.lineHeightH1,
    paddingTop: 40
  };

  return h1Theme;
};
