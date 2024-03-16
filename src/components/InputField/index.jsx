/* eslint-disable no-unused-vars */
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const InputField = () => {
  const [userInput, setUserInput] = useState("");
  const handleSend = () => {
    console.log(userInput);
    setUserInput("");
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
          onClick={handleSend}
        >
          Send
        </Button>
      </Box>
    </>
  );
};

export default InputField;
