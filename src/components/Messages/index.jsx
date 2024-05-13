import { useChatMessages } from "@chainlit/react-client";
import { Box, Card, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReactMarkdown from "react-markdown";
import PlutoIcon from "../PlutoIcon";
import FormatCode from "../FormatCode";
const MessageCard = () => {
  const { messages } = useChatMessages();

  return (
    <>
      <Box mb={"5rem "}>
        {messages.map((msg, index) => (
          <>
            <Box key={index} sx={{ width: "100%" }}>
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
                      padding: "1rem",
                      paddingLeft: "2rem",
                      fontSize: "1.3rem",
                      my: 1,
                    }}
                    className="message-card"
                    elevation={3}
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