import { Box } from "@mui/material";
import InputField from "../InputField";
import MessageCard from "../Messages";

import "./index.css";
import { useTheme } from "../../theme/ThemeContext";

const Playground = () => {
  const { darkMode } = useTheme();
  console.log(darkMode);
  return (
    <>
      <Box pb="2rem" justifyContent="center">
        <MessageCard />
      </Box>

      <Box
        sx={{ backgroundColor: darkMode ? "#303030" : "#ececec" }}
        className="input-container"
      >
        <InputField />
      </Box>
    </>
  );
};

export default Playground;
