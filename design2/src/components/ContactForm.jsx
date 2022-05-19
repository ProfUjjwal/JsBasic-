import React, { useState } from 'react'
import "./styles.css"
import { ADD_CONTACT, CHANGE_UPDATE, UPDATE_CARD, SAVE_CARD_ID, CHECK } from "../action";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ContactForm(props) {
    const history = useNavigate();
    const dispatch = useDispatch();
    const people = useSelector((state) => state.Contacts);
    const update = useSelector((state) => state.UPDATE);
    const save = useSelector((state) => state.SaveCardID);

    let flag = false;

    function filled() {
        let name = document.getElementById('Input_Name').value;
        let email = document.getElementById('Input_Email').value;
        let phone = document.getElementById('Input_Phone').value;
        if (name != "" || email != "" || phone != "") {
            return true;
        }
        else {
            return false;
        }
    }

    function Check(_email) {
        for (let index = 0; index < people.length; index++) {
            const element = people[index];
            if (_email == element.email) {
                return true;
            }
        }

        return false;
    }

    function TakeInput() {
        
        return(
            <div class="bg-grey-lighter flex flex-col">
                
                  <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            
                        <button
                            onClick={
                                () => {
                                    if (filled() == true) {
                                        confirmAlert({
                                            title: 'Warning',
                                            message: 'Data Is Unsaved',
                                            buttons: [
                                              {
                                                label: 'Yes',
                                                    onClick: () => {
                                                        props.setFlag(false);
                                                        dispatch(CHANGE_UPDATE(false));
                                                        document.getElementById('Input_Name').value = "";
                                                        document.getElementById('Input_Email').value = "";
                                                        document.getElementById('Input_Phone').value = "";
                                                    }
                                              },
                                              {
                                                label: 'No',
                                                onClick: () => {}
                                              }
                                            ]
                                        });
                                    }
            
                                    else {
                                        props.setFlag(false);
                                    }
                                    // ------------

                                }} type="button" class="bg-blue rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span class="sr-only">Close menu</span>
                            {/* <!-- Heroicon name: outline/x --> */}
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h1 class="mb-8 text-3xl text-center">Contact Form</h1>

                        <input
                            id='Input_Name'  
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name"
                        />
      
                        <input
                            id='Input_Email'  
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" 
                        />
      
                        <input
                            id='Input_Phone'    
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="phone"
                            placeholder="Phone Number" 
                        />
                          
                        <br />

                        {
                            update ?
                    
                            <button
                                onClick={() => {
                                    // console.log("first")
                                    // console.log("Save is " + save);
                                        dispatch(UPDATE_CARD(save));
                                        // props.setFlag(false);
                                        history("/")
                                }}
                                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-30 mb-2 w-80"
                            > Update </button>
                                :
                            <button
                                onClick={() => {
                                    // console.log("first")
                                    flag = Check(document.getElementById('Input_Email').value);
                                    if (flag == false) {
                                        dispatch(ADD_CONTACT());
                                        // props.setFlag(false);
                                        history("/")
                                       
                                    }
                                    else {
                                        console.log("flg is false")
                                        alert("Email ID Already Regitered");
                                    }
                                   
                                }}
                                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-30 mb-2 w-80"
                            >Save</button>    
                        }

                      </div>
                  </div>
              </div>
        )
      }
      
    return (
        <>
            {TakeInput()}
        </>
    )
}
