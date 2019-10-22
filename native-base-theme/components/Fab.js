// @flow

import variables from '../variables/commonColor'

export default _ => {

  const { ui, text } = variables.councils

  return {
    'NativeBase.Button': {
      alignItems: 'center',
      padding: null,
      justifyContent: 'center',
      'NativeBase.Icon': {
        alignSelf: 'center',
        fontSize: 20,
        marginLeft: 0,
        marginRight: 0
      },
      'NativeBase.IconNB': {
        alignSelf: 'center',
        fontSize: 20,
        marginLeft: 0,
        marginRight: 0
      }
    }
  }

}
