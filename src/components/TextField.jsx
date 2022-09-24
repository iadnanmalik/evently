import React from "react";
import { ErrorMessage, useField } from "formik";
import styled from "styled-components";

const CustomErrorMessage = styled(ErrorMessage)`
  color: #e61445;
  font-size: 0.6rem;
`;
const CustomLabel = styled.label`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #4f4f4f;
`;
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <CustomLabel htmlFor={field.name}>{label}</CustomLabel>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <CustomErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
