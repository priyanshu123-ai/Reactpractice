import './App.css'
import Button from './component/Button'
import Customer from './component/Customer'
import InvoiceList from './component/InvoiceList'
import { HiOutlinePencil } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";
import { PiDotsThreeVertical } from "react-icons/pi";

function App() {
  const user = [
    {
      "Name": "John Doe", "Date": "16/01/2025", "icons": [<HiOutlinePencil key="1" />, <IoEyeOutline key="2" />, <PiDotsThreeVertical key="3" />]
    },
    {
      "Name": "John Doe", "Date": "16/01/2025", "icons": [<HiOutlinePencil key="1" />, <IoEyeOutline key="2" />, <PiDotsThreeVertical key="3" />]
    },
    {
      "Name": "John Doe", "Date": "16/01/2025", "icons": [<HiOutlinePencil key="1" />, <IoEyeOutline key="2" />, <PiDotsThreeVertical key="3" />]
    },
    {
      "Name": "John Doe", "Date": "16/01/2025", "icons": [<HiOutlinePencil key="1" />, <IoEyeOutline key="2" />, <PiDotsThreeVertical key="3" />]
    }

  ]
  

  return (
    <>
   <div className='my-[10vw] mx-[30vw] border-2 p-10'>
   <Button></Button>
 
 <Customer></Customer>
 <InvoiceList users = {user}></InvoiceList>

   

   </div>
   
    </>
  )
}

export default App