import React from "react";
import woman from '../../public/media/woman.jpg';

const About = () => {
  return (
    <>
      <div className="container">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={woman} className="d-block mx-lg-auto img-fluid rounded" alt="Unsplash Image"
                   width="700" height="500" loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-light lh-1 mb-3 text-dark">We love providing readable content</h1>
              <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-dark btn-lg px-4 me-md-2">Learn More</button>
                <button type="button" className="btn btn-outline-dark btn-lg px-4">Become a Contributor</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Change the background</h2>
                <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look.
                  Then, mix and match with additional component themes and more.</p>
                <button className="btn btn-outline-light" type="button">Example button</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-5 bg-light border rounded-3">
                <h2>Add borders</h2>
                <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be
                  sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both
                  column's content for equal-height.</p>
                <button className="btn btn-outline-secondary" type="button">Example button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
