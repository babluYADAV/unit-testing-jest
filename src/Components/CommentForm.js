import React, { useState } from "react";

const CommentForm = () => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <h2>comment form</h2>
      <input
        type="text"
        value={text}
        placeholder="write your comment here"
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="checkbox"
        id="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor="checkbox">i agree to terms and conditions</label>
      <button
        disabled={!checked || !text}
        onClick={() => console.log("clicked")}
      >
        Comment
      </button>
    </div>
  );
};

export default CommentForm;
