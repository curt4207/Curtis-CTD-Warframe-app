import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const lightTheme = {
  backgroundColor: '#f5f5f5',
  textColor: '#333',
};

const darkTheme = {
  backgroundColor: '#222',
  textColor: '#fff',
};

const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  transition: background-color 0.3s, color 0.3s;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Main = styled.main`
  padding: 1rem;
`;

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <LayoutContainer>
        <Header>
          <h1>Layout Page</h1>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </Header>
        <Main>{children}</Main>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;