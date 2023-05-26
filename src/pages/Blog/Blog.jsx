import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="bg-light p-5">
      <Container>
        <h2 className="text-center mb-4">This is our blog page</h2>
        <Accordion defaultActiveKey="0" className="w-75 mx-auto">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="fs-3">
              1. Tell us the differences between uncontrolled and controlled
              components.?
            </Accordion.Header>
            <Accordion.Body>
              In short, a controlled component is a component where its state is
              managed by React, while an uncontrolled component is a component
              where its state is managed by the component itself. Controlled
              components offer more flexibility, better state management, easier
              testing, and better performance, while uncontrolled components are
              more rigid, may have performance issues, but may be necessary in
              some cases, such as when working with third-party libraries or
              non-React components.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="fs-3">
              2. Tell us the difference between nodejs and express js.?
            </Accordion.Header>
            <Accordion.Body>
              de.js is a runtime environment that allows developers to run
              JavaScript on the server-side, while Express.js is a popular
              framework for building web applications on top of Node.js. Node.js
              provides a set of built-in modules for building server-side
              applications, while Express.js provides additional features and
              functionality, such as routing, middleware, and templating
              engines, to make it easier to build web applications. In short,
              Node.js is the underlying platform for building server-side
              applications in JavaScript, while Express.js is a framework that
              builds on top of Node.js to provide additional features and
              functionality for building web applications.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="fs-3">
              3. How to validate React props using PropTypes?
            </Accordion.Header>
            <Accordion.Body>
              To validate React props using PropTypes, you can use the
              'prop-types' library to define the expected types for each prop in
              the component. You can then import the PropTypes package and
              define the prop types for the component. By validating props with
              PropTypes, you can catch errors early on in the development
              process and ensure that your components are being used correctly.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="fs-3">
              4. What is a custom hook, and why will you create a custom hook?
            </Accordion.Header>
            <Accordion.Body>
              A custom hook is a JavaScript function that allows you to reuse
              stateful logic across multiple components in a React application
              by using one or more built-in React hooks. You might create a
              custom hook to encapsulate complex or repetitive logic that is
              used across multiple components, promote code reuse, simplify and
              organize your code, and make it easier to maintain and debug.
              Examples of use cases for custom hooks include managing the state
              of a form, handling network requests, or implementing a scroll
              position listener.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Blog;
