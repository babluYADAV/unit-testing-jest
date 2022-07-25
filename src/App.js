import "./App.css";
import CommentForm from "./Components/CommentForm";
import CommentList from "./Components/CommentList";
import Joke from "./Components/Joke";

function App() {
  const comment = [
    { id: 1, comment: "comment one" },
    { id: 2, comment: "comment two" },
  ];
  return (
    <div className="App" data-testid="myrootdiv">
      <CommentForm />
      <CommentList allCommnents={comment} />
      <Joke />
    </div>
  );
}

export default App;
