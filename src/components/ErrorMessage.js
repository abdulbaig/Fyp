import React from "react";

export default function ErrorMessage({ message, visible }) {
  if (!visible || !message) return null;
  return (
    <div>
      <p style={{ color: "red" }}>{message}</p>
    </div>
  );
}
