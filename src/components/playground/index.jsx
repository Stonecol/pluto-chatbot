import { Box } from "@mui/material";
import InputField from "../InputField";
import MessageCard from "../Messages";

import "./index.css";

const Playground = () => {
  return (
    <>
      <Box justifyContent="center">
        <MessageCard />
      </Box>

      <div className="input-container">
        <InputField />
      </div>
    </>
  );
};

export default Playground;