import axios from "axios";
import React, { useState, useEffect } from "react";

const Joke = () => {
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setJoke(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <div data-testid="loading">loading...</div>;
  }

  return (
    <ul>
      {joke?.map((todo) => {
        return (
          <li key={todo.id} data-testid="list-item">
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
};

export default Joke;
