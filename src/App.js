import "./styles.css";
import { Question } from "./Question";
import data from "./data";

export default function App() {
  return (
    <div className="App">
      <main>
        <h1 class="title">Questions And Answers About Login</h1>
        <div class="question-container">
          {data.map((question) => {
            return <Question {...question} />;
          })}
        </div>
      </main>
    </div>
  );
}

/* Andro Edsarev S. Villariez */
