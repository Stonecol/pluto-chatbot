/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ReactMarkdown from "react-markdown";
import CopyToClipboard from "react-copy-to-clipboard";

const FormatCode = ({ markdownContent }) => {
  const darkCodeStyle = {
    backgroundColor: "#2d2d2d",
    color: "#fff",
    padding: "1rem",
    borderRadius: "0.5rem",
    fontFamily: "monospace",
    overflowX: "auto",
  };

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
                <CopyToClipboard text={children && children.trim()}>
                  <div>
                    <pre style={darkCodeStyle}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "end",
                        }}
                      >
                        <button>copy</button>
                      </div>

                      <code className={className} {...props}>
                        {children}
                      </code>
                    </pre>
                  </div>
                </CopyToClipboard>
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
