import React from "react";
import "./Footer.css";
// get our fontawesome imports
import "font-awesome/css/font-awesome.min.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="section-one">
        <p>Home</p>
        <p>About US</p>
        <p>Contact</p>
      </div>

      <div className="section-two">
        <p>© eazyraize</p>
      </div>

      <div className="section-three">
        <p>
          <i class="fa fa-twitter" />
        </p>
        <p>
          <i class="fa fa-youtube" />
        </p>
        <p>
          <i class="fa fa-medium" />
        </p>
      </div>
    </div>
  );
}
