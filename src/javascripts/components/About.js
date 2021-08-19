import React from "react";

export function About() {
  return (
    <div className="container">
      <div className="p-5">
        <h1 className="mb-3 text-center">Welcome to Shopper!</h1>
        <p className="w-75 mx-auto">
          Shopper is a small project written using React and Express.js
          to display my understanding in working with APIs to warehouse data in an external location.
          It is a work in progress as I continue to gain knowledge about
          data modeling, HTTP requests, and the front end elements to support those technologies. I utilized Pantry's api and cloud storage for this
          project. You can view their documentation here: <a href="https://getpantry.cloud/">https://getpantry.cloud/</a>
         
        </p>
      </div>
    </div>
  );
}
