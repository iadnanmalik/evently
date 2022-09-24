import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import {
  CreateEventButtonBig,
  TextHeadinggGradient,
} from "../pages/styles/Home.styles";
import ReactFlagsSelect from "react-flags-select";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { useState } from "react";

export const CustomFormInput = styled.div`
  width: 100%;
  padding: 7px 25px;
  font-size: 0.8rem;
  background: white;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #e0e0e0;
`;
const CustomLabel = styled.label`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #4f4f4f;
  margin: 0px 4px;
`;
const CustomLocationSearch = styled(ReactFlagsSelect)`
  margin-top: 14px;
  border: transparent;
`;
export const CreateForm = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const validate = Yup.object({
    eventName: Yup.string()
      .min(3, "Must be 15 characters or less")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    hostName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
  });

  const handleCreateEvent = () => {
    navigate("/create");
  };

  return (
    <Formik
      initialValues={{
        eventName: "",
        hostName: "",
        email: "",
        password: "",
        confirmPassword: "",
        startDate: new Date(),
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <TextHeadinggGradient className="my-4 font-weight-bold .display-4">
            Create A New Event
          </TextHeadinggGradient>
          <Form>
            <TextField label="Event Name" name="eventName" type="text" />
            <TextField label="Host Name" name="hostName" type="text" />
            <div className=" d-flex align-items-center gap-4">
              <div>
                <CustomLabel htmlFor="">Starting Date</CustomLabel>
                <CustomFormInput>
                  <input type="date" />
                </CustomFormInput>
              </div>
              <div>
                <CustomLabel htmlFor="">Expiration Date</CustomLabel>
                <CustomFormInput>
                  <input type="date" />
                </CustomFormInput>
              </div>
            </div>
            <CustomLocationSearch
              selected={selected}
              onSelect={(code) => setSelected(code)}
              searchPlaceholder="Enter a Location"
            />
            <div>
              <CustomLabel htmlFor="">Upload File</CustomLabel>
              <CustomFormInput>
                <input type="file" className="upload__input" />
              </CustomFormInput>
            </div>
          </Form>
          <CreateEventButtonBig onClick={handleCreateEvent} className="form">
            ⏩&nbsp;Proceed to Events
          </CreateEventButtonBig>
        </div>
      )}
    </Formik>
  );
};
