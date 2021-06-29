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
              <h1 className="display-5 fw-bold lh-1 mb-3">We love providing readable content</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
