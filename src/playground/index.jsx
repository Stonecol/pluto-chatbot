import InputField from "../components/InputField";
import MessageCard from "../components/Messages";
import "./index.css";
const Playground = () => {
  return (
    <>
      <div className="chat-container">
        <MessageCard />
      </div>
      <div className="input-container">
        <InputField />
      </div>
    </>
  );
};

export default Playground;
