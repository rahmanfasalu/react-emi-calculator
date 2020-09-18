import React from "react";
import styled from "styled-components";

import Theme from "src/theme/theme";

// Header Footer
// Application Footer
const Footer = (): JSX.Element => {
  return (
    <HeaderContainer>
      <HeaderText>Footer</HeaderText>
    </HeaderContainer>
  );
};

// Styled components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 0 0;
  height: 40px;
  width: 100%;
  border-top: 1px solid ${Theme.colors.primary};
  position: fixed;
  bottom: 0;
  background: #fff;
  z-index: 99;
`;

const HeaderText = styled.div`
  font-size: 18px;
  color: ${Theme.colors.primary};
  font-family: ${Theme.font.primary};
`;

export default Footer;
