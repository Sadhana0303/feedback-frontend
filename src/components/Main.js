import React, { useState,useEffect } from "react";
import axios from "axios";
import OutputBox from "./OutputBox";

/*function template(fn, mn, ln, gen, gra, sug) {
  return {
    fn: fn,
    mn: mn,
    ln: ln,
    gender: gen,
    grading: gra,
    sugg: sug
  };
}*/

export default function Main() {
  let [personList, setpersonList] = useState([]);
  let [fname, setFname] = useState("");
  let [mname, setMname] = useState("");
  let [lname, setLname] = useState("");
  let [gender, setGender] = useState("");
  let [sugg, setSugg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    axios.get("https://localhost:3001/getAllFeeds")
      .then((res) => setpersonList(res.data))
      .catch(function (error) {
        console.log(error);
      });
  }, [personList]);

  return (
    <main>
      <div className="left-container">
        <div id="left-sub-box">
          <label>First Name</label>
          <span>*</span>
          <br />
          <input
            type="text"
            value={fname}
            className="typ-txt"
            onChange={(e) => setFname(e.target.value)
                
            }
          />
          <br />
          <br />
          <label>Middle Name</label>
          <br />
          <input
            type="text"
            value={mname}
            className="typ-txt"
            onChange={(e) =>setMname(e.target.value)
                
            }
          />
          <br />
          <br />
          <label>Last Name</label>
          <span>*</span>
          <br />
          <input
            type="text"
            value={lname}
            className="typ-txt"
            onChange={(e) =>setLname(e.target.value)
            }
          />
          <br />
          <br />
          <label>Gender</label>
          <span>*</span>
          <label className="gen">Male</label>
          <input
            type="radio"
            name="gen"
            className="typ-radio"
            value="Mr."
            onChange={(e) => setGender(e.target.value)}
          />
          <label className="gen">Female</label>
          <input
            type="radio"
            name="gen"
            value="Ms."
            className="typ-radio"
            onChange={(e) => setGender(e.target.value)}
          />
          <br />
          <br />

          <label>Suggestions</label>
          <span>*</span>
          <br />
          <br />
          <textarea
            value={sugg}
            onChange={(e) => setSugg(e.target.value)}
          ></textarea>
          <br />
          <button onClick={handleSubmit}>+</button>
          <button onClick={handleClear }>-</button>
          <br />
          <span>{errorMsg}</span>
        </div>
      </div>

      <OutputBox personList={personList} />
    </main>
  );
  function handleClear() {
    setFname("");
    setMname("");
    setLname("");
    setGender("");
    setSugg("");
  }
  

  function handleSubmit() {
    if (fname.length === 0) {
      setErrorMsg("FirstName cannot be left blank");
    } else if (lname.length === 0) {
      setErrorMsg("LastName required");
    } else if (gender.length === 0) {
      setErrorMsg("Gender Cannot be left blank");
    } else if (sugg.length === 0) {
      setErrorMsg("Suggestion cannot be left blank");
    } else {
      setErrorMsg("");
     // setpersonList((prev) => {
      //  return [...prev, template(fname, mname, lname, gender, sugg)];
      axios.post("https://localhost:3001/createuser", {
        name: `${gender} ${fname} ${mname} ${lname}`,
        feedback: sugg

     });
    }
  }
}


