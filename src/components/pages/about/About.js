import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            I'm currently a student, interested in gaining experience by using the skills developed during the past years.
            I'm mainly interested in cloud, networking and java.
            I would appreciate an opportunity at the beginning of my career to further my skills in this area of interest.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Aleea Martir Istvan Andrei Nr2
              </p>
              <p>
                <strong>Email:</strong> dorinserpe99@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 0725 972 749
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - Romanian
              </p>
              <p>
                <strong>Second Language</strong> - English
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
