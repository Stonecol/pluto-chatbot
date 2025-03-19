import { Box } from "@mui/material";
import InputField from "../InputField";
import MessageCard from "../Messages";

import "./index.css";
import { useTheme } from "../../theme/ThemeContext";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Playground = () => {
  const { darkMode } = useTheme();
  const notifyApiDelay = () =>
    toast.info(
      "The server is starting up and will be ready in approximately 40-50 seconds. Please wait!",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        backgroundColor: "red",
      }
    );
  useEffect(() => {
    notifyApiDelay();
  }, []);
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
      <ToastContainer />
    </>
  );
};

export default Playground;
