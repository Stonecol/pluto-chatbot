import { useChatMessages } from "@chainlit/react-client";
import { Box, Card, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PlutoIcon from "../PlutoIcon";
import FormatCode from "../FormatCode";
import { useRef, useEffect, useMemo } from "react";

function flattenMessages(messages, condition) {
  return messages.reduce((acc, node) => {
    if (condition(node)) {
      acc.push(node);
    }

    if (node.steps?.length) {
      acc.push(...flattenMessages(node.steps, condition));
    }

    return acc;
  }, []);
}
const MessageCard = () => {
  const { messages } = useChatMessages();
  const flatMessages = useMemo(() => {
    return flattenMessages(messages, (m) => m.type.includes("message"));
  }, [messages]);
  const currentMsg = useRef(null);
  useEffect(() => {
    if (currentMsg.current) {
      currentMsg.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <>
      <Box mb={"5rem"}>
        {flatMessages.map((msg, index) => (
          <Box key={index} sx={{ width: "100%" }} pb="1rem">
            <Grid
              container
              spacing={{ xs: 3.5, md: 1 }}
              justifyContent={"center"}
            >
              <Grid
                item
                md={0.5}
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
              <Grid item md={9} xs={10}>
                <Card
                  sx={{
                    px: "1.5rem",
                    fontSize: {
                      xs: "1rem",
                      sm: "1.2rem",
                      md: "1.25rem",
                    },
                    my: 1,
                    // backgroundColor: msg.name === "user" ? "#dbfbff" : "",
                  }}
                  elevation={msg.name === "user" ? 1 : 4}
                  ref={index === messages.length - 1 ? currentMsg : null}
                >
                  <FormatCode markdownContent={msg.output} />
                </Card>
              </Grid>
              <Grid
                item
                md={0.5}
                xs={0.5}
                display="flex"
                justifyContent="center"
                my={1}
              >
                {msg.name === "Chatbot" && <PlutoIcon size="3rem" />}
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default MessageCard;
