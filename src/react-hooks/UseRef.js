import { useEffect, useRef, useState } from "react";
import Input from "../components/Input";

const UseRef = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const submitRef = useRef();

  const renderRef = useRef(0);

  useEffect(() => {
    // Want to run only one time
    firstNameRef.current.focus();
  }, []);

  useEffect(() => {
    // Want to run on every rerender
    renderRef.current = renderRef.current + 1;
  });

  const changeFirstName = ({ target: { value } }) => {
    setFirstName(value);
  };

  const changeLastName = ({ target: { value } }) => {
    setLastName(value);
  };

  const firstNameEnter = (e) => {
    if (e.keyCode === 13) {
      lastNameRef.current.focus();
    }
  };

  const secondNameEnter = (e) => {
    if (e.keyCode === 13) {
      submitRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <Input
          name="firstName"
          ref={firstNameRef}
          value={firstName}
          onKeyDown={firstNameEnter}
          onChange={(e) => changeFirstName(e)}
        ></Input>
      </div>
      <div>
        <Input
          name="lastName"
          ref={lastNameRef}
          value={lastName}
          onKeyDown={secondNameEnter}
          onChange={(e) => changeLastName(e)}
        ></Input>
      </div>
      <button ref={submitRef}>Submit</button>
      <div>This page rerendered {renderRef.current} times</div>
    </div>
  );
};

export default UseRef;
