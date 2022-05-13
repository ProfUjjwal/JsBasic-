import React, { useMemo } from "react";
import TakeInput from "./TakeInput";

export default function ShowInfo(props) {
  //   if (props.UserName != "") {
  //     // addData();
  //   }

  function Remove(UserEmail) {
    let result = props.peps.filter((peps) => peps.Email != UserEmail);
    props.setPeps(result);
  }

  function Edit(UserEmail) {
    const index = props.peps.findIndex((user) => user.Email === UserEmail);
    let name = props.peps[index].Name;
    let email = props.peps[index].Email;
    let phone = props.peps[index].Phone;

    Remove(UserEmail);

    document.getElementById("name").setAttribute("value", name);
    document.getElementById("email").setAttribute("value", email);
    document.getElementById("phone").setAttribute("value", phone);


    document.getElementById("contact-form-c").style.transform =
      "translateY(0%)";

    // Remove(UserEmail);
  }

  return (
    <>
      
      
      <div className="bg-gray-200 w-screen h-20 flex px-20 items-center">
        <button
          onClick={() => {
            document.getElementById("contact-form-c").style.transform =
              "translateY(0%)";
          }}
          className="text-white bg-gray-800 h-10 px-5 rounded-sm"
        >
          Add User
        </button>
      </div>

      <div className="p-20 flex flex-row gap-20 flex-wrap justify-center">
        {props.peps.map(({ Name, Phone, Email }, index) => (
          <div
            key={Email}
            className="w-80 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4  focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdown"
                className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
              >
                <ul className="py-1" aria-labelledby="dropdownButton">
                  <li>
                    <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="mb-3 w-24 h-24 rounded-full shadow-lg"
                src="https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {Name}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {Email}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {Phone}
              </span>
              <div className="flex mt-4 space-x-3 lg:mt-6">
                <button
                  onClick={() => Edit(Email)}
                  className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => Remove(Email)}
                  className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
