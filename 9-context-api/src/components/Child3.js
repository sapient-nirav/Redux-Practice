import React, { useContext } from "react";
import { data1, data2 } from "../context/UserContext";
const Child3 = () => {
  const companyName = useContext(data1);
  const projectName = useContext(data2);
  return (
    <div>
      <h1>
        Company name is {companyName} and project is {projectName}.
      </h1>
    </div>
  );
};

export default Child3;
