import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "../components/ErrorMessage";
export default function InputField({
  textRows,
  textCols,
  placeholder,
  width,
  height,
  type,
  value,
  onValueChange,
  name,
}) {
  const { setFieldTouched, errors, touched } = useFormikContext() ?? {};

  return (
    <>
      <input
        style={{
          width,
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "20px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="input-component"
        type={type}
        placeholder={placeholder}
        textarea={<textarea rows={textRows} cols={textCols}></textarea>}
        value={value}
        onValueChange={onValueChange}
      />
    </>
  );
}
