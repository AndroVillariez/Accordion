import { useState } from "react";
import * as ai from "react-icons/ai";

export const Question = ({ id, title, info }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <article key={id} className="question">
      <div class="qarea">
        <h3>{title}</h3>
        <button onClick={() => setIsPressed(!isPressed)} className="btn">
          {isPressed ? <ai.AiOutlineMinus /> : <ai.AiOutlinePlus />}
        </button>
      </div>
      {isPressed && <p>{info}</p>}
    </article>
  );
};
