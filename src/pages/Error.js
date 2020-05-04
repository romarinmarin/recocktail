import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>oops wrong way !</h1>
        <Link className="btn btn-primary" to="/">
          Back home
        </Link>
      </div>
    </section>
  );
}
