import React from "react";
import Form from "./Form";
import "../styles.css";

export default function Frame() {
  return (
    <div className="container">
      <div className="phone">
        <div className="content">
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="about">
                <span>App For Searching Songs Lyrics</span>
              </ul>
            </div>
          </nav>
          <Form />
        </div>
      </div>
    </div>
  );
}
