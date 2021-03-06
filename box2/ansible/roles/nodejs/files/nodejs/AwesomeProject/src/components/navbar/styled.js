import styled from 'styled-components/native';
import Button from 'react-native-button';
import {Device, MediaQuerySelector } from 'react-native-responsive-ui';
import  { Link } from 'react-router-native';
import { View, Text } from 'react-native';

function getPortraitQuery() {
  const { width, height} = Device.dimensions.window;
//  console.log('777', width, height);

  return MediaQuerySelector.query({orientation: "portrait", minHeight: 459}, width, height);
}


const NavbarView = styled.View `
  color: white;
  background-color: black;
  flex-direction: row;
  justifyContent: space-between;
`;

const ColouredButton = styled(Button) `
  color: white;
  backgroundColor: black;
  padding: 10px 10px 5px 5px;
`;


const NavbarButton = styled(ColouredButton) `
  &:hover {
    background-color:#555;
  }
`;


const NavbarLink = styled(Link) `
  backgroundColor: black;
  padding: 10px 10px 5px 5px;
  &:hover {
    background-color:#555;
  }
`;

const WhiteText = styled(Text) `
  color: white;
  backgroundColor: black;
  padding: 10px 10px 5px 5px;
`;



const SidebarToggle = styled(NavbarButton) `
  display: ${() => getPortraitQuery()?'flex':'none'};
`;


export { WhiteText, NavbarLink, NavbarView, NavbarButton, SidebarToggle };

