/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ReactMarkdown from "react-markdown";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../../theme/ThemeContext";

const FormatCode = ({ markdownContent }) => {
  const { darkMode } = useTheme();
  const darkCodeStyle = {
    backgroundColor: "#1c1c1c",
    color: "#fff",
    padding: "1rem",
    margin: "1rem",
    borderRadius: "0.5rem",
    fontFamily: "monospace",
    overflowX: "auto",
  };

  const notify = () =>
    toast.success("Code copied!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: darkMode ? "dark" : "light",
      transition: Bounce,
    });

  return (
    <div>
      <ReactMarkdown
        components={{
          // Render code blocks with dark background
          code: ({ node, inline, className, children, ...props }) => {
            const language = className
              ? className.replace("language-", "")
              : "";
            if (!inline && language) {
              return (
                <>
                  <CopyToClipboard text={children && children.trim()}>
                    <div>
                      <pre style={darkCodeStyle}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "end",
                          }}
                        >
                          <button onClick={notify}>copy</button>
                        </div>

                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    </div>
                  </CopyToClipboard>
                  <ToastContainer />
                </>
              );
            }
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default FormatCode;
