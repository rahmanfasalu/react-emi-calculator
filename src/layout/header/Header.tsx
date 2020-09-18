import React from "react";
import styled from "styled-components";

import Theme from "src/theme/theme";

// Header Layout
// Application Header
const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <HeaderText>EMI Calculator</HeaderText>
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
  border-bottom: 1px solid ${Theme.colors.primary};
`;

const HeaderText = styled.div`
  font-size: 18px;
  color: ${Theme.colors.primary};
  font-family: ${Theme.font.primary};
`;

export default Header;
