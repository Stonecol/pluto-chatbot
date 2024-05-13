import "./App.css";
import Playground from "./components/playground";
import { useEffect } from "react";

import {
  ChainlitAPI,
  sessionState,
  useChatSession,
} from "@chainlit/react-client";
import { useRecoilValue } from "recoil";

const CHAINLIT_SERVER = "http://localhost:8000";
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
  }, [session, connect]);

  return (
    <>
      <Playground />
    </>
  );
}

export default App;