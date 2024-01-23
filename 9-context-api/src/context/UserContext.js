import React, { createContext } from "react";
import Child1 from "../components/Child1";
const data1 = createContext();
const data2 = createContext();
const UserContext = () => {
  const companyName = "ABC";
  const projectName = "XYZ";
  return (
    <div>
      <data1.Provider value={companyName}>
        <data2.Provider value={projectName}>
          <Child1 />
        </data2.Provider>
      </data1.Provider>
    </div>
  );
};

export default UserContext;

export { data1, data2 };
