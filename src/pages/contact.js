import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container pb-5">
        <h1 className="py-4">Get in Touch</h1>

        <div className="row">
          <div className="col border-end">
            <h3>We'd love to hear from you!</h3>
            <p>Why you should choose Pylot.</p>
            <ul className="icon-list">
              <li>Always great news</li>
              <li>In-depth market analysis</li>
              <li>Verifiable factual sources</li>
              <li>Friendly and fun staff</li>
            </ul>
          </div>
          <div className="col ps-4">
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Enter your email address" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputName" placeholder="Enter your name" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity" placeholder="Enter your city" />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">State</label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>California</option>
                  <option>New York</option>
                  <option>Texas</option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-dark btn-sm">Send Message</button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
