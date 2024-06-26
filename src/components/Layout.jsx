import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";

const lightTheme = {
  backgroundColor: "#f5f5f5",
  textColor: "#333",
};

const darkTheme = {
  backgroundColor: "#222",
  textColor: "#fff",
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
  border: 1px solid;
`;

const Main = styled.main`
  padding: 1rem;
`;

const Button = styled.button`
  height: 40px;

  color: darkslategray;
  background-color: aliceblue;
  /* padding: 8, */
  /* borderRadius: 4, */
`;
const HomeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <LayoutContainer>
        <Header>
          <Navbar />
          <Button onClick={toggleTheme}>Toggle Theme</Button>
        </Header>

        <Main>{children}</Main>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
