
import {BsFillPencilFill ,BsFillTrashFill} from 'react-icons/bs';

function ReadOnlyRow ({contact ,key , handleEditClick ,handleDelete})  {
  return (
    <tr key={key} >
        <td>{contact.fullName}</td>
        <td>{contact.address}</td>
        <td>{contact.phoneNumber}</td>
        <td>{contact.email}</td>
        <td className=''>
          <button type="button"  className='' onClick={(event) =>handleEditClick(event , contact)}><BsFillPencilFill size={23} className='text-[#0011ff] mr-6'/></button>
          <button type="button" onClick={()=>handleDelete(contact.id)}><BsFillTrashFill size={23} className=''/></button>
        </td>
    </tr>

  )
}


export default ReadOnlyRow
