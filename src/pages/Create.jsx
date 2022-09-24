import React from "react";
import styled from "styled-components";
import SocialImage from "../assets/social.gif";
import { CreateForm } from "../components/CreateForm";

const CustomImage = styled.img`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;
const Create = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <CreateForm />
        </div>
        <div className="col-md-4  my-auto flex center">
          <CustomImage src={SocialImage} alt="Social"></CustomImage>
        </div>
      </div>
    </div>
  );
};

export default Create;
