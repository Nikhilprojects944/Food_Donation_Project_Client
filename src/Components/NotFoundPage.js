import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function NotFoundPage() {
  return (
    <div>
      <h1>Page Not Found Error (404) </h1>
      <p>
        <Link to="/home">
          <Button bsStyle="primary">Back to Home</Button>
        </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
