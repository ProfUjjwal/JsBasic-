import React from 'react'
import HoldCards from './HoldCards';
import ContactForm from './ContactForm';
import { useState } from 'react';
import './styles.css'
import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, CHANGE_UPDATE, CHECK} from "../action/index";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';

export const WhiteScreen = () => {
    
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
    
    const dispatch = useDispatch();
    const update = useSelector((state) => state.UPDATE);
    const [flag, setFlag] = useState(false);
    // const update = useSelector((state) => state.UPDATE);

    return (
        <div>
            
            <Link 
                to="/add"
                onClick={
                    () => {
                        if (flag == true && filled() == true) {
                            confirmAlert({
                                title: 'Warning',
                                message: 'Data is Unsaved ',
                                buttons: [
                                  {
                                    label: 'Yes',
                                        onClick: () => {
                                            setFlag(true);
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
                            setFlag(true);
                            dispatch(CHANGE_UPDATE(false));
                        }
                    }
                }
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Add User
                </span>
            </Link>

            <div className='flex justify-around'>
                <div> 
                    
             <HoldCards setFlag = {setFlag} flagy = {flag}/>
            </div>
                {
                    flag ? < ContactForm setFlag = {setFlag} flagy = {flag} /> : <></>
                }
            </div>
            
        </div>
    )
}
