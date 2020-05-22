import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

export const Search = () => {

  const [keyWord, setkeyWord] = useState("");
  const [url, setUrl] = useState("");
  const [results, setResults] = useState("");
  const [spinner, setSpinner] = useState("");
  const [conditional, setConditional] = useState(false);


  const submitHandler = (e) => {
    e.preventDefault();

    fetch("search/v1", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify({
        keyWord: keyWord,
        channelURL: url,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
        setResults(data.data);
        setUrl("");
        setkeyWord("");
        setConditional(true);
      });
  };


  return (
   <>
     <div className="container">
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Control
              required="true"
              value={keyWord}
              placeholder="Enter keyword"
              onChange={(e) => setkeyWord(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              required="true"
              value={url}
              placeholder="Enter URL  e.g. https://www.google.com"
              onChange={(e) => setUrl(e.target.value)}
            />
          </Form.Group>
          <Button type="submit">Search</Button>
        </Form>
        {results.keyWord}
        {results.value}
        {results.url}
      </div>
   </>
  )
}
