import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import './search.css'

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
        webURL: url,
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


  const renderForm = () => {
    return (
      <div className="container" style={{height: '200px'}}>
        <Form onSubmit={submitHandler} style={{marginTop: '50px'}}>
          <Form.Group>
            <Form.Control
              required
              value={keyWord}
              placeholder="Enter keyword"
              onChange={(e) => setkeyWord(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              required
              value={url}
              placeholder="Enter URL  e.g. https://www.google.com"
              onChange={(e) => setUrl(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" className="infoButton" style={{textAlign: 'center'}}>Search</Button>
        </Form>
      </div>
    );
  };

  const renderResults = () => {

    if(results === "") {
      return (
        <div className="container result" style={{height: '300px'}}>
      <h1 className="text-center" style={{margin: '50px 0px'}}>Search Results for: {results.keyword}</h1>
      <p>Sorry, we couldn't find any posts. Please try a different search.</p>
      </div>
        )
    }else {
      return (
        <div className="container result" style={{height: '500px'}}>
          <h1 className="text-center" style={{margin: '50px 0px'}}>Search Results for: {results.keyWord}</h1>
          <Card className="flex-row flex-wrap result" style={{height: '300px'}}>
            <Card.Img src="https://res.cloudinary.com/people-matters/image/upload/w_624,h_351,c_scale,q_auto,f_auto/v1492931658/1492931658.jpg" className='col-4' style={{padding: '10px' }}/>
            <Card.Body className='col-6 text-left'style={{margin: '50px 0px'}}>
              <Card.Text> Your Search using the keyword: {results.keyWord}</Card.Text>
              <Card.Text>appeared {results.value} times</Card.Text>
              <Card.Text>in the the URL: {results.url}</Card.Text>
            </Card.Body>
          </Card>
          </div>
      );
    }
    }


  return (
   <>
     {!conditional && renderForm()}
      {conditional && renderResults()}
   </>
  )
}
