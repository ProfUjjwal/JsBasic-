import React, { useState } from "react";
// import ShowInfo from "./ShowInfo";

export default function TakeInput(props) {
  const [_name, setName] = useState("");
  const [_Email, setEmail] = useState("");
  const [_Phone, setPhone] = useState();

  // function Remove(UserEmail) {
  //   console.log("Trying to delete " + _Email);
  //   const _index = props.peps.findIndex((user) => user.Email === _Email);
  //   let result = props.peps.filter((peps) => peps.index != _index);
  //   props.setPeps(result);
  // }


  function SentData() {

    let temp = [
      ...props.peps,
      {
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstocksnap.io%2Fsearch%2Fprofile&psig=AOvVaw0wWjSpUxn98fkoOODctkwX&ust=1652504892393000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIiK6Mra2_cCFQAAAAAdAAAAABAD",
        Name: _name,
        Email: _Email,
        Phone: _Phone,
      },
    ];
    props.setPeps(temp);
    document.getElementById("contact-form-c").style.transform =
      "translateY(-150%)";
  }

  const handleName = (e) => {
    setName(e.target.value);
    console.log(_name);
  };

  return (
    <div
      id="contact-form-c"
      className="fixed items-center w-screen h-screen bg-slate-700 bg-opacity-40"
      style={{ transform: "translateY(-150%)" }}
    >
      <div className="bg-grey-lighter flex flex-col h-screen">
        <div
          className="z-0 fixed items-center w-screen h-screen"
          onClick={() => {
            document.getElementById("contact-form-c").style.transform =
              "translateY(-150%)";
          }}
        ></div>
        <div className="z-10 container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Contact Form</h1>
            <input
              id="name"
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
              value={_name}
              onChange={handleName}
            />

            <input
              id="email"
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={_Email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              id="phone"
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="phone"
              placeholder="Phone Number"
              value={_Phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <br />

            <button
              id = "SaveButton"
              onClick={() => SentData()}
              type="submit"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-30 mb-2 w-80"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
