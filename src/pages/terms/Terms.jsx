import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container className="text-center bg-light mt-5 p-4">
      <h2 className="fs-2 fw-bold">This is our terms and condition</h2>
      <div>
        <p className="fs-3 fw-semibold">1. ACCEPTANCE OF TERMS OF USE</p>
        <p className="fs-5 text-primary">
          Please read the following terms and conditions as these terms of use
          “Terms” constitute a legally binding agreement between you and the
          Company regarding your use of the Site and any services offered by the
          Company including but not limited to delivery of specialised content
          via the Site, any mobile or internet connected device or otherwise the
          "the Service".
        </p>
      </div>
      <div>
        <p className="fs-3 fw-semibold">2. CONTENT OWNERSHIP AND LIMITED LICENSE</p>
        <p className="fs-5 text-primary">
          means Company proprietary content, including but not limited to,
          Company trademarks and logos made available through the Site and
          Services, excluding Third Party Content and User Submissions.
        </p>
      </div>
      <div>
        <p className="fs-3 fw-semibold">3. THE SERVICE REGISTRATION AND ACCESS TO USE</p>
        <p className="fs-5 text-primary">
          You may also register for the Services by using your Google or
          Facebook username and password. If, however, you are under 18 years of
          age, you may log in to the Services using Google or Facebook Connect
          and utilize the Services only under the supervision of your parent or
          legal guardian. Using Google or Facebook Connect allows us to
          personalize and enhance your experience while using the Services,
          based on your personal information, profile, likes, and other relevant
          information. When you use this feature, you expressly consent to
          information about your activity on the Services (i.e. what you have
          read, what you have liked, ratings given by you, etc.)
        </p>
      </div>
      <p>
        Go Back to <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
