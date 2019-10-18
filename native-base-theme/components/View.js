// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {

  const { ui, text } = variables.councils

  const viewTheme = {
    '.padder': {
      padding: variables.contentPadding
    },
    '.buttonContainerRoot': {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: ui.eggshell,
      borderTopWidth: 2,
      borderTopColor: ui.slightlyLighterEggshell,
      paddingVertical: 15
    },
    '.containerAllRoot': {
      height: '100%',
      justifyContent: 'space-between',
      paddingTop: 25
    },
    '.headerContainerRoot': {
      width: '95%',
      alignItems: 'center',
    },
  };

  return viewTheme;
};
