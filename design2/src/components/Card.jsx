import React, { useState } from 'react'
import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, CHANGE_UPDATE, SAVE_CARD_ID, CHECK} from "../action/index";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


export default function Card(props) {
    // console.log("welcome to Cards.jsx" + props.ShowName);
  const dispatch = useDispatch();
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
    function handleDelete() {
        console.log("deleete is clicked")
        dispatch(DELETE_CONTACT(props.CardID)) 
    }

  async function handleEdit() {
      await props.setFlag(true);
      
      dispatch(CHANGE_UPDATE(true));
      //console.log("Welcome to handleEdit " + props.CardID);
      dispatch(SAVE_CARD_ID(props.CardID)); 
      
    dispatch(EDIT_CONTACT(props.CardID));
  }
  return (
    <>
      {/* ----add new */}

      <div class="flex justify-center mb-20 ">
  <div class="flex flex-col md:flex-row  rounded-lg bg-white shadow-lg">
    <img class=" w-full h-20 md:h-20 object-cover  rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://avatars.githubusercontent.com/u/91177278?v=4" alt="" />
          <div class="pl-10 flex flex-col justify-start mr-10">
            <div>

      <span class="text-gray-900 text-xl font-medium mb-2 mr-40">{props.ShowName}</span> <span className='text-gray-500'>{props.ShowPhone}</span>
            </div>
            <p class="text-gray-700 text-base mb-4">
            {props.ShowEmail}
       </p>
            {/* <p class="text-gray-600 text-xs">{props.ShowPhone}</p> */}
            <div class="flex mt-4 space-x-3 lg:mt-6 mb-10">
          <div className='mr-40'>

                  <button
                      onClick={ 
                        () => {
                          if (props.flagy == true && filled() == true) {
                              confirmAlert({
                                  title: 'Confirm to submit',
                                  message: 'Are you sure to do this.',
                                  buttons: [
                                    {
                                      label: 'Yes',
                                          onClick: () => {
                                            handleEdit();
                                            // dispatch(CHECK());
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
                            handleEdit();
                          }
                          
                        } 
                      }
                      class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Edit</button>
          </div>
          <div>
            
                  <button
                      onClick={
                        () => {
                          if (props.flagy == true && filled() == true) {
                            confirmAlert({
                                title: 'Confirm to submit',
                                message: 'Are you sure to do this.',
                                buttons: [
                                  {
                                    label: 'Yes',
                                        onClick: () => {
                                          handleDelete(); 
                                          document.getElementById('Input_Name').value = "";
                                          document.getElementById('Input_Email').value = "";
                                          document.getElementById('Input_Phone').value = "";
                                          // dispatch(CHECK());
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
                            handleDelete();
                          }

                          // console.log("flagy is " + props.flagy);
                          // if( props.flagy == false) {
                                 
                          // }

                          // else {
                          //   dispatch(CHECK());
                          //   handleDelete();
                          // }
                        }
                      }
                      class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                    Delete</button>
                </div>
            </div>
          </div>


        </div>
</div>
      {/* end new */}
   
    {/* <div id = "card" class="bg-teal-100  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        
        <div class="flex justify-end px-4 pt-4">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns=""></svg>
            </button>
          
        </div>
    
        <div class="flex justify-around w-80 items-center pb-10">
             <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.ShowName}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{props.ShowEmail}</span>
            <span class="text-sm text-gray-500 dark:text-gray-400">{props.ShowPhone}</span>  
            <div class="flex mt-4 space-x-3 lg:mt-6">
                  <button
                      onClick={ 
                        () => {
                          handleEdit();
                          dispatch(CHECK());
                        } 
                      }
                      class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Edit</button>
                
                  <button
                      onClick={
                        () => {
                           if( props.flagy == false) {
                            handleDelete();      
                          }

                          else {
                            dispatch(CHECK());
                            handleDelete();
                          }
                        }
                      }
                      class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                    Delete</button>
            </div>
        </div>
      </div> */}
      </>
  )
}
