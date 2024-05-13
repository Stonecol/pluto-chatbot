/* eslint-disable no-unused-vars */
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { v4 as uuidv4 } from "uuid";
import { useChatInteract } from "@chainlit/react-client";
const InputField = () => {
  const [userInput, setUserInput] = useState("");
  const { sendMessage } = useChatInteract();
  const handleEnter = (e) => {
    if (e.key == "Enter") {
      handleSendMessage();
    }
  };
  const handleSendMessage = () => {
    const content = userInput.trim();
    if (content) {
      const message = {
        id: uuidv4(),
        name: "user",
        type: "user_message",
        output: content,
        createdAt: new Date().toISOString(),
      };
      sendMessage(message, []);
      setUserInput("");
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <TravelExploreOutlinedIcon
          sx={{ color: "#66b2ff", mr: 1, my: 0.5, fontSize: "3.5rem" }}
        />
        <TextField
          id="input-with-sx"
          label="Ask me anything..."
          variant="outlined"
          fullWidth
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          onKeyDown={(e) => handleEnter(e)}
          inputProps={{ style: { fontSize: "1.4rem" } }}
        />
        <Button
          sx={{
            mx: "1rem",
            height: "3.4rem",
            mb: "0.3rem",
          }}
          endIcon={<SendIcon />}
          variant="contained"
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </Box>
    </>
  );
};

export default InputField;
