// import {MdSaveAlt ,MdOutlineCancel} from 'react-icons/md'
// import {BsFillPencilFill , BsFillTrashFill} from 'react-icons/bs';
import ReadOnlyRow from "./ReadOnlyRow"
import Modal from "./modal"

import { useState , Fragment } from "react"
import "./appTable.css"
import {nanoid} from 'nanoid'
import EditableRow from "./EditableRow"

import data from "./mock-data.json"
const AppTable = () => {

  const [contacts , setContacts] = useState(
      // [
      //   {
      //     "id": 1,
      //     "fullName": "",
      //     "address": "",
      //     "phoneNumber": "",
      //     "email": ""
      //   }
      // ]
      data
  )  ;
  // main form
  const [addFormData , setAddFormData] = useState({
    fullName : '',
    address : '',
    phoneNumber : '',
    email : ''
  })
  // edit form
  const [editFormData , setEditFormData]  = useState({
    fullName : '',
    address : '',
    phoneNumber : '',
    email : ''
  })

  const [editContactId , setEditContactId] = useState(null)
  const [showModal ,setShowModal] =useState(false)

//   add a row to form
  const handleAddFormChange= (event)=> {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const filedValue = event.target.value;


    const newFormData = {...addFormData};
    newFormData[fieldName] = filedValue;
    setAddFormData(newFormData);
  }

  // edit an input of a row
  const handleEditFormChange = (event)=>{
      event.preventDefault();
      const fieldName = event.target.getAttribute('name');
      const filedValue = event.target.value;
      const newFormData = {...editFormData};
      newFormData[fieldName] = filedValue;
      setEditFormData(newFormData)
  }
   
  //   submit formData
  const handleSubmitForm= (event) =>{
    event.preventDefault()
    var firstRow = true
    const updateContacts = contacts.map(contact =>{
      if(contact.fullName=='' && contact.phoneNumber=='' && contact.address=='' && contact.email=='')
        return {...contact , fullName:addFormData.fullName , address:addFormData.address ,phoneNumber:addFormData.phoneNumber , email:addFormData.email}
      else
        firstRow = false
    })
    if(firstRow)
      setContacts(updateContacts)
    else{
      const newContact = {
          id: nanoid(),
          fullName: addFormData.fullName,
          address: addFormData.address,
          phoneNumber: addFormData.phoneNumber,
          email: addFormData.email
      };
      const newContacts = [...contacts , newContact]
      setContacts(newContacts);
    }
    setAddFormData({
      fullName:"",
      address:"",
      phoneNumber:"",
      email:""
    })
  }
  //  edit a row and save it
  const handleEditFormSubmit = (event) =>{
    event.preventDefault()

    const editedContact = {
      id:editContactId,
      fullName:editFormData.fullName,
      address: editFormData.address,
      phoneNumber:editFormData.phoneNumber,
      email:editFormData.email
    }
    const newContacts =[...contacts];
    const index = contacts.findIndex((contact)=> contact.id === editContactId)
    newContacts[index] = editedContact
    setContacts(newContacts)
    setEditContactId(null)

  }

  //click to edit a row
  const handleEditClick = (event , contact)=>{
      event.preventDefault()
      setEditContactId(contact.id)

      const formValues = {
          fullName: contact.fullName,
          address: contact.address,
          phoneNumber:contact.phoneNumber,
          email:contact.email
      }
      setEditFormData(formValues);
  }

  // cancel to edit
  const handleCancelEdit=()=>{
    setEditContactId(null)
  }

  //delete a row
  const handleDelete=(contactId)=>{
    const newContacts = [...contacts]
    const index = contacts.findIndex((contact)=> contact.id===contactId)
    newContacts.splice(index,1);
    setContacts(newContacts)
  }

  return (
    <div className="">
      <form action=""  onSubmit={handleEditFormSubmit} className="app-container">
        <table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Actions</th>
              </tr>
          </thead>   
          <tbody>
              {contacts.map((contact )=>(
                <Fragment key={contact.id}>
                  {editContactId===contact.id ?  
                  <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} EditFormSubmit={handleEditFormSubmit} cancel={handleCancelEdit}/> : 
                  <ReadOnlyRow  contact={contact}  handleEditClick={handleEditClick} handleDelete={handleDelete}/>}
                </Fragment>
              ) )}
        
          </tbody>
        </table>
      </form>
      <button type="button"  onClick={()=>setShowModal(true)} className="px-12 py-2 rounded-lg hover:font-bold hover:text-[#ddd] mt-4 mx-auto flex bg-red-600 bg-opacity-70">add contact</button>
      <Modal visible={showModal}  handleAddFormChange={handleAddFormChange} handleSubmitForm={handleSubmitForm} addFormData={addFormData} onClose={()=>setShowModal(false)}/>
      
      {/* <form onSubmit={handleSubmitForm } action="" className="border px-8 md:px-12 lg:px-20 py-12 md:w-1/2 flex flex-col mt-6 w-[80%]">
        <h3 className="mx-auto">Add a contact</h3>
        <label htmlFor="fullName"   className="mt-6 font-bold">name</label>
        <input onChange={handleAddFormChange} id='fullName' className="border-2 bg-gray-100 mt-2  p-2  md:w-full rounded" type="text" name="fullName" required='required' placeholder="enter your name" value={addFormData.fullName}/>

        <label htmlFor="address" className="mt-6 font-bold">address</label>
        <input onChange={handleAddFormChange} id='address' className="border-2 bg-gray-100 mt-2 p-2  md:w-full rounded" type="text" name="address" required='required' placeholder="enter your address" value={addFormData.address}/>

        <label htmlFor="phoneNumber"   className="mt-6 font-bold">phoneNumber</label>
        <input onChange={handleAddFormChange} id='phoneNumber' className="border-2 bg-gray-100 mt-2 p-2  md:w-full rounded" type="text" name="phoneNumber" required='required' placeholder="enter your phoneNumber" value={addFormData.phoneNumber}/>

        <label htmlFor="email"   className="mt-6 font-bold">email</label>
        <input onChange={handleAddFormChange} id='email' className="border-2 bg-gray-100 mt-2 p-2  w-full rounded" type="text" name="email" required='required' placeholder="enter your email" value={addFormData.email}/>

        <button type="submit" className="bg-blue-400 px-12 py-2 rounded-lg hover:bg-blue-600 hover:font-bold hover:text-[#ddd] mt-4 w-[100px] mx-auto flex justify-center">Add</button>
      </form> */}
    </div>
  )
}

export default AppTable
