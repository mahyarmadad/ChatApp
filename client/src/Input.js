import React from "react";
import "./Input.css";

function Input({ sendMessage, setMessage, message }) {
  return (
    <form>
      <input
        type="text"
        className="input"
        placeholder="Type a Message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
}

export default Input;
