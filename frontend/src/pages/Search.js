import React from 'react'

export const Search = () => {

  const [keyWord, setkeyWord] = useState("");
  const [url, setUrl] = useState("");
  const [results, setResults] = useState("");
  const [spinner, setSpinner] = useState("");
  const [conditional, setConditional] = useState(false);

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
      </div>
   </>
  )
}
