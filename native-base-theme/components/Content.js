// @flow

import variables, { platform, PLATFORM } from './../variables/commonColor'

export default _ => {

  const { ui, text } = variables.councils

  return {
    flex: 1,
    backgroundColor: 'transparent',
    'NativeBase.Segment': {
      borderWidth: 0,
      backgroundColor: 'transparent'
    }
  }

}
