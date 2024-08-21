// src/App.js
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme"; // Import the light theme
import HomePage from "./components/HeadLineList"; // Your main page component

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize styles for the entire app */}
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
