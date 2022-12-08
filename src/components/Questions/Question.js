import React from "react";
import "./Question.css";
import Accordion from "react-bootstrap/Accordion";

const Question = () => {
  return (
    <div className="mt-5 mb-5">
      <h3 className="mb-3">Frequently Ask Questions : </h3>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How does React work?</Accordion.Header>
          <Accordion.Body>
            While building client-side apps, a team of Facebook developers
            realized that the DOM is slow (The Document Object Model (DOM) is an
            application programming interface (API) for HTML and XML documents.
            It defines the logical structure of documents and the way a document
            is accessed and manipulated.). So, to make it faster, React
            implements a virtual DOM that is basically a DOM tree representation
            in JavaScript. So when it needs to read or write to the DOM, it will
            use the virtual representation of it. Then the virtual DOM will try
            to find the most efficient way to update the browser's DOM. Unlike
            browser DOM elements, React elements are plain objects and are cheap
            to create. React DOM takes care of updating the DOM to match the
            React elements. The reason for this is that JavaScript is very fast
            and it's worth keeping a DOM tree in it to speed up its
            manipulation. Although React was conceived to be used in the
            browser, because of its design it can also be used in the server
            with Node.js.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Whats are the different between "props" and "state"?
          </Accordion.Header>
          <Accordion.Body>
            For props the Data is passed from one component to another . On the
            otherhand,in state the Data is passed within the component only.
            <br />
            props is is Immutable (cannot be modified). On the otherhand, state
            is Mutable ( can be modified).
            <br />
            Props are read-only. On the otherhand, State is both read and write.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What can we do with "useEffect" besides data load?
          </Accordion.Header>
          <Accordion.Body>
            It can be use at - <br />1.Reading from local storage <br />2.Registering and
            deregistering event listeners
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Question;
