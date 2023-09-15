
const Modal = ({visible , handleAddFormChange , handleSubmitForm ,addFormData ,onClose}) => {
  if(!visible) return null

  // Create a wrapper function that calls both handleSubmitForm and onClose
  const handleSubmitWithClose = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    handleSubmitForm(e); // Call the handleSubmitForm function
    onClose(); // Call the onClose function
  };

  const handleClose=(e)=>{
    e.preventDefault()
    if(e.target.id==='wrapper')
      onClose();
  }
  return (
    <div className="fixed inset-0 bg-opacity-30 bg-black backdrop-blur-md flex justify-center items-center" id="wrapper" onClick={handleClose}>
        <button className="absolute top-2 right-2 text-4xl" onClick={onClose}>X</button>
        <form onSubmit={handleSubmitWithClose} action="" className="border px-8 md:px-12 lg:px-20 py-12 md:w-1/2 flex flex-col mt-6 w-[80%] bg-white">
            <h3 className="mx-auto text-orange-600 text-xl font-medium">Add a contact</h3>
            <label htmlFor="fullName"   className="mt-6 font-bold">name</label>
            <input onChange={handleAddFormChange} id='fullName' className="border-2 bg-gray-200  font-medium text-gray-600 mt-2  p-2  md:w-full rounded" type="text" name="fullName" required='required' placeholder="enter your name" value={addFormData.fullName}/>

            <label htmlFor="address" className="mt-6 font-bold">address</label>
            <input onChange={handleAddFormChange} id='address' className="border-2 bg-gray-200  font-medium text-gray-600 mt-2 p-2  md:w-full rounded" type="text" name="address" required='required' placeholder="enter your address" value={addFormData.address}/>

            <label htmlFor="phoneNumber"   className="mt-6 font-bold">phoneNumber</label>
            <input onChange={handleAddFormChange} id='phoneNumber' className="border-2 bg-gray-200  font-medium text-gray-600 mt-2 p-2  md:w-full rounded" type="text" name="phoneNumber" required='required' placeholder="enter your phoneNumber" value={addFormData.phoneNumber}/>

            <label htmlFor="email"   className="mt-6 font-bold">email</label>
            <input onChange={handleAddFormChange} id='email' className="border-2 bg-gray-200  font-medium text-gray-600 mt-2 p-2  w-full rounded" type="text" name="email" required='required' placeholder="enter your email" value={addFormData.email}/>

            <button type="submit" className="bg-blue-400 px-14 transition duration-500 hover:scale-x-110 py-2 rounded-lg hover:bg-blue-600 hover:font-bold hover:text-[#ddd] mt-4 w-[100px] mx-auto flex justify-center">Add</button>
        </form>
    </div>
  )
}

export default Modal
