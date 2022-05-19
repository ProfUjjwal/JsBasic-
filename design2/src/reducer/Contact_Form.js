const initialState = [
  {
    id: '1',
    name: 'User1',
    email: 'user1@mail.com',
    phone: 9876543210,
    image: 'https://avatars.githubusercontent.com/u/91177278?v=4',
  },
  {
    id: '2',
    name: 'User2',
    email: 'user2@mail.com',
    phone: 9876543212,
    image: 'https://avatars.githubusercontent.com/u/91177278?v=4',
  },
];

const Contacts = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT': {
      // console.log('hello1');
      let name = document.getElementById('Input_Name').value;
      let email = document.getElementById('Input_Email').value;
      let phone = document.getElementById('Input_Phone').value;

      let arraySize = state.length;
      let lastIndex = arraySize - 1;
      let newId = state[lastIndex].id + 1;

      let newContact = {
        id: newId,
        name: name,
        email: email,
        phone: phone,
      };

      let updatedContact = [...state, newContact];
      return updatedContact;
    }

    case 'EDIT_CONTACT': {
      // console.log(initialState);

      let contactIndex = -1;

      state.map((element, index) => {
        if (element.id == action.payload) {
          contactIndex = index;
        }
      });

      // Step 1 : Show data in Form
      document.getElementById('Input_Name').value = state[contactIndex].name;
      document.getElementById('Input_Email').value = state[contactIndex].email;
      document.getElementById('Input_Phone').value = state[contactIndex].phone;

      // Step 2 : Fill Data in id's object elements by
      return state;
    }

    case 'DELETE_CONTACT': {
      console.log('delete payload', action.payload);
      const arr = state.filter((contact) => contact.id != action.payload);
      console.log(arr);
      return arr;
    }

    case 'UPDATE_CARD': {
      // console.log('id to edit is ' + action.payload);

      let Nname = document.getElementById('Input_Name').value;
      let Eemail = document.getElementById('Input_Email').value;
      let Pphone = document.getElementById('Input_Phone').value;

      const arr = state.map((element, index) => {
        if (element.id == action.payload) {
          return {
            ...element,
            name: Nname,
            email: Eemail,
            phone: Pphone,
          };
        }
        
        else {
          return element;
        }
      });

      console.log(arr);
      return arr;
    }
      
    case 'CHECK': {
      console.log("Welcone to check")
      let name = document.getElementById('Input_Name').value;
      let email = document.getElementById('Input_Email').value;
      let phone = document.getElementById('Input_Phone').value;
      if (name != "" || email != "" || phone != "") {
        alert("Warning : Data is Not Saved");
      }
      
      return state;
    }

    default:
      return state;
  }
};

export default Contacts;
