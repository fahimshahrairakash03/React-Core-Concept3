import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handlerIncrease = () => setCount(count + 1);
  const handlerDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter: {count} </h1>
      <button onClick={handlerIncrease}>Increase</button>
      <button onClick={handlerDecrease}>Decrease</button>
    </div>
  );
}

function LoadComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <h2>Comments: {comments.length}</h2>
      {comments.map((comment) => (
        <Comments email={comment.email} body={comment.body}></Comments>
      ))}
    </div>
  );
}

function Comments(props) {
  return (
    <div>
      <h4 style={{ color: "red" }}>Email: {props.email}</h4>
      <p>{props.body}</p>
    </div>
  );
}

export default App;
