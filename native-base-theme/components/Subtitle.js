// @flow

import variables from '../variables/commonColor'

export default _ => {

  const { ui, text } = variables.councils

  return {
    fontSize: variables.subTitleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.subtitleColor,
    textAlign: 'center',
    paddingLeft: 0,
    marginLeft: -3
  }

}
