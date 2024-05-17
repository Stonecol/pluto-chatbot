import { Box } from "@mui/material";
import InputField from "../InputField";
import MessageCard from "../Messages";

import "./index.css";

const Playground = () => {
  return (
    <>
      <Box pb="2rem" justifyContent="center">
        <MessageCard />
      </Box>

      <div className="input-container">
        <InputField />
      </div>
    </>
  );
};

export default Playground;
