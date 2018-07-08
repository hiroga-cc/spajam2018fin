import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Button, Text, View } from 'native-base';
import styled from 'styled-components';
import { Layout } from '../components/';

export default class Top extends Component {
  render() {
    return (
      <BackGround>
        <TopBoard>
          何回だって、旅に出よう
        </TopBoard>
        <StyledButton
          full
          onPress={() => Actions.start()}
        >
          <Text>初めての旅を開始</Text>
        </StyledButton>
      </BackGround>
    )
  }
}

const TopBoard = styled(View)`
  margin: 35px 40px;
  border: 3px solid #fff;
  flex: 0.3;
  backgroundColor: rgb(89, 202, 222);
`

const BackGround = styled(View)`
  backgroundColor: rgb(189, 231, 240);
  flex: 1;
`

const StyledButton = styled(Button)`
  margin: 15px 10px;
  backgroundColor: rgb(240, 43, 96);
  border-radius: 50;
`