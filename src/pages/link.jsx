import React from "react";
import { useParams } from "react-router-dom";

const LinkPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Link</h1>
      <p>Link id: {id}</p>
      <p>This page could show link details and analytics.</p>
    </div>
  );
};

export default LinkPage;
