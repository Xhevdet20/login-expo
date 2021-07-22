import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  InnerContainer,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar
} from './../components/styles';

const Welcome = ({navigation}) => {
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
          <WelcomeImage resizeMode="cover" source={require('./../assets/img/expo-bg2.png')} />
          <WelcomeContainer>
            <PageTitle welcome={true}>Welcome! </PageTitle>
            <SubTitle welcome={true}>Xhevdet Kryeziu</SubTitle>
            <SubTitle welcome={true}>xhevdet1996@gmail.com</SubTitle>
            <StyledFormArea>
              <Avatar resizeMode="cover" source={require('./../assets/img/expo-bg1.png')} />
              <Line />
              <StyledButton onPress={() => {navigation.navigate('Login') }}>
                <ButtonText>Logout</ButtonText>
              </StyledButton>
            </StyledFormArea>
          </ WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
