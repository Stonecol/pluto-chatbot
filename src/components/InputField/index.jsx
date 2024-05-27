/* eslint-disable no-unused-vars */
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import { useState } from "react";
import { IconButton } from "@mui/material";
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
          sx={{
            color: "#1976d2",
            mr: 1,
            my: 0.5,
            fontSize: {
              xs: "2.8rem",
              sm: "3rem",
              md: "3.5rem",
            },
          }}
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
          inputProps={{
            style: {
              fontSize: {
                xs: "1.4rem",
                sm: "1.4rem",
                md: "1.5rem",
              },
            },
          }}
        />
        <IconButton
          sx={{
            mx: "1rem",
            height: {
              xs: "2.8rem",
              sm: "2.9rem",
              md: "3.4rem",
            },
            width: {
              xs: "2.8rem",
              sm: "2.9rem",
              md: "3.4rem",
            },
            mb: "0.25rem",
            backgroundColor: "primary.main",
            color: "white",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
          onClick={handleSendMessage}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default InputField;
