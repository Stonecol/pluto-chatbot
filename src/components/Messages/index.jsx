import { useChatMessages } from "@chainlit/react-client";
import { Box, Card, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PlutoIcon from "../PlutoIcon";
import FormatCode from "../FormatCode";
import { useRef, useEffect } from "react";
const MessageCard = () => {
  const { messages } = useChatMessages();
  const currentMsg = useRef(null);
  useEffect(() => {
    if (currentMsg.current) {
      currentMsg.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <>
      <Box mb={"5rem"}>
        {messages.map((msg, index) => (
          <>
            <Box key={index} sx={{ width: "100%" }} pb="1rem">
              <Grid container spacing={2} justifyContent={"center"}>
                <Grid
                  item
                  xs={0.5}
                  display="flex"
                  justifyContent="center"
                  my={1}
                >
                  {msg.name === "user" && (
                    <AccountCircleIcon
                      sx={{ fontSize: "3.3rem", color: "#1976d2" }}
                    />
                  )}
                </Grid>
                <Grid item xs={9}>
                  <Card
                    sx={{
                      paddingLeft: "2rem",
                      fontSize: "1.3rem",
                      my: 1,
                      backgroundColor: msg.name === "user" ? "#dbfbff" : "",
                    }}
                    className="message-card"
                    elevation={msg.name === "user" ? 1 : 3}
                    ref={index === messages.length - 1 ? currentMsg : null}
                  >
                    <FormatCode markdownContent={msg.output} />
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={0.5}
                  display="flex"
                  justifyContent="center"
                  my={1}
                >
                  {msg.name === "Chatbot" && <PlutoIcon size="3rem" />}
                </Grid>
              </Grid>
            </Box>
          </>
        ))}
      </Box>
    </>
  );
};

export default MessageCard;
