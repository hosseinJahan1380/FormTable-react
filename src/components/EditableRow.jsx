
import {MdSaveAlt ,MdOutlineCancel} from 'react-icons/md'
const EditableRow = ({editFormData , handleEditFormChange  , cancel}) => {
  return (
    <tr>
      <td> 
        <input type="text" required='required'
         placeholder='enter a name...' name='fullName' 
         className="rounded w-full p-1"
         value={editFormData.fullName}
         onChange={handleEditFormChange}/>
      </td>

      <td>
        <input type="text" required='required' 
        placeholder='enter an address...' name='address' 
        className="rounded w-full p-1" 
        value={editFormData.address}
        onChange={handleEditFormChange}/>  
      </td>

      <td>
        <input type="text" required='required' 
        placeholder='enter a phoneNumber...' name='phoneNumber' 
        className="rounded w-full p-1" 
        value={editFormData.phoneNumber}
        onChange={handleEditFormChange}/>
      </td>

      <td>
        <input type="text" required='required' 
        placeholder='enter an email...' name='email' 
        className="rounded w-full p-1"
        value={editFormData.email}
        onChange={handleEditFormChange}/>
      </td>
      <td className=''>
        <button type="submit"><MdSaveAlt size={28} className='mr-4 text-teal-800'/></button>
        <button type="button" onClick={cancel}><MdOutlineCancel size={28} className=' text-red-900'/></button>
      </td>
    </tr>
  )
}

export default EditableRow
