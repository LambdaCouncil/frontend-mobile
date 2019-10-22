// @flow

import variables from '../variables/commonColor'

export default _ => {

  const { ui, text } = variables.councils

  return {
    '.multiline': {
      height: null
    },
    height: variables.inputHeightBase,
    color: variables.inputColor,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    fontSize: variables.inputFontSize
  }

}
