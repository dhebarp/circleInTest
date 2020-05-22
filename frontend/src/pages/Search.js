import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

export const Search = () => {

  const [keyWord, setkeyWord] = useState("");
  const [url, setUrl] = useState("");
  const [results, setResults] = useState("");
  const [spinner, setSpinner] = useState("");
  const [conditional, setConditional] = useState(false);

  return (
   <>
     <div className="container">
        <Form>
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
      </div>
   </>
  )
}
