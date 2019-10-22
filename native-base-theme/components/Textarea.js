// @flow

import variable from '../variables/commonColor'

export default _ => {

  const { ui, text } = variable.councils

  return {
    '.underline': {
      borderBottomWidth: variable.borderWidth,
      marginTop: 5,
      borderColor: variable.inputBorderColor
    },
    '.bordered': {
      borderWidth: 1,
      marginTop: 5,
      borderColor: variable.inputBorderColor
    },
    color: variable.textColor,
    paddingLeft: 10,
    paddingRight: 5,
    fontSize: 15,
    textAlignVertical: 'top'
  }

}
