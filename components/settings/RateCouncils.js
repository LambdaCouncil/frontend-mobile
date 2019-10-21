import React from 'react'
import {KeyboardAvoidingView, StyleSheet, View} from "react-native";
import {H1} from 'native-base'
import {Link, withRouter} from 'react-router-native'
import Icon from "../Icon";

const RateCouncils = (props) => {
  return (
    <KeyboardAvoidingView
      style={styles.inputContainer}
      behavior='padding'>

      <Link onPress={() => props.history.goBack()} style={styles.link}>
        <Icon
          name='arrow-back'
          color='green'
          style={styles.backButton}
        />
      </Link>

      <H1>Rate Councils</H1>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    position: 'absolute',
    top: 25,
    left: 5,
    width: '100%',
    height: 50
  },
  backButton: {
    fontSize: 50
  }
})

export default RateCouncils;