import React from "react";
import Person from "./Person";
export default function RightContainer({ personList }) {
  return (
    <div className="right-container">
      {React.Children.toArray(
        personList.map((person) => <Person obj={person} />)
      )}
    </div>
  );
}
