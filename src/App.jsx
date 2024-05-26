import "./App.css";
import Playground from "./components/Playground";
import { useEffect } from "react";

import {
  ChainlitAPI,
  sessionState,
  useChatSession,
} from "@chainlit/react-client";
import { useRecoilValue } from "recoil";
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  Box,
} from "@mui/material";
import { ThemeProvider, useTheme } from "./theme/ThemeContext";
import { lightTheme, darkTheme } from "./theme/theme";
import DarkModeToggle from "./components/DarkModeToggle";

const CHAINLIT_SERVER = "https://api-pluto-backend.onrender.com";
const userEnv = {};

const apiClient = new ChainlitAPI(CHAINLIT_SERVER);

function App() {
  const { connect } = useChatSession();
  const session = useRecoilValue(sessionState);

  useEffect(() => {
    if (session?.socket.connected) {
      return;
    }
    fetch(apiClient.buildEndpoint("/custom-auth"))
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        connect({
          client: apiClient,
          userEnv,
          accessToken: `Bearer: ${data.token}`,
        });
      });
  }, [connect]);

  const ThemeConsumer = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
      <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Box display="flex" justifyContent="end">
          <DarkModeToggle
            sx={{ mb: "1.5rem" }}
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        </Box>
        <Playground />
      </MuiThemeProvider>
    );
  };

  return (
    <>
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    </>
  );
}

export default App;
