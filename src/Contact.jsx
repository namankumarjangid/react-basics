import React, { useState } from 'react';


const Contact = () => {
  const [fullName, setfullName] = useState({
    fname: "",
    lname: "",
    mail: "",
    number: "",
  });
  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value
    // const name = event.target.name

    // note:- above can be written shortcutly by object distructuring

    const { value, name } = event.target;


    setfullName((preValue) => {
      console.log(preValue);

      return {
        ...preValue,
        // we change value from fName,lName to fname,lname because name and value should be match here
        [name]: value
      }

      // if (name === "fName") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     mail: preValue.mail,
      //     number: preValue.number
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     mail: preValue.mail,
      //     number: preValue.number
      //   };
      // } else if (name === "mail") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     mail: value,
      //     number: preValue.number
      //   };
      // } else if (name === "number") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     mail: preValue.mail,
      //     number: value
      //   };
      // }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h1>Hello {fullName.fname} {fullName.lname}</h1>
        <p>{fullName.mail} {fullName.number}</p>
        <input
          type="text"
          placeholder="Enter your Name"
          name="fname"
          onChange={inputEvent}
          value={fullName.fname} />
        <br />
        <input type="text"
          name="lname"
          value={fullName.lname}
          onChange={inputEvent}
          placeholder="Enter your lastname" />
        <br />
        <input type="email"
          placeholder="Enter your mail"
          name="mail"
          onChange={inputEvent}
          value={fullName.mail} />
        <br />
        <input type="number"
          placeholder="Enter your number"
          name="number"
          onChange={inputEvent}
          value={fullName.number} />
        <br />
        <button type="submit"> Submit</button>
      </div>
    </form>
  );
};


export default Contact;