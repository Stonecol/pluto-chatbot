/* eslint-disable react/prop-types */
import Pluto from "../../assets/plt.svg";
import Avatar from "@mui/material/Avatar";
const PlutoIcon = ({ size }) => {
  return <Avatar sx={{ width: size, height: size }} src={Pluto} />;
};

export default PlutoIcon;
