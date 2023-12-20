import React from 'react';
import "./header.css";
import { IoIosSearch } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { MdOutlineGraphicEq } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { RiInbox2Line } from "react-icons/ri";
import { CiBrightnessUp } from "react-icons/ci";
import { FaFilter } from "react-icons/fa6";
import { MdArrowBackIosNew } from "react-icons/md";
const Header = () => {
  return (
    <div className="header">
      <header className="headerContent">
        <div>
          <ul>
            <li>Dashboard</li>
            <li>Pages</li>
            <li>App</li>
            <li>Layout</li>
            <li>Help</li>
          </ul>
        </div>


        <div className="headerIcons">
          <IoIosSearch/>
          <VscGraph/>
          <MdOutlineGraphicEq/>
          <FaRegMessage/>
          <RiInbox2Line/>
          <CiBrightnessUp/>
          <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-HD-Image.png" height="20px" width="20px"  />
          
        </div>



      </header>
      <div className='orderDetails'>
        <div className="orderContent">
          <b>Order Details</b><br/>
          <span>Home-eCommerce-Sales</span>

        </div>
        <div className="btn_group">
          <button style={{background:"white", color:"black"}}><FaFilter/>Filter</button>
          <button>Create</button>

        </div>
          
      </div>

      <div className="summary">
        <div className="orderList">
          
          <ul>
            <li><span>Order summary</span></li>
            <li style={{color:"black"}}><span>Order History</span></li>
          </ul>

        </div>
        <div className="btn_groups">
          <MdArrowBackIosNew/>
          <button>Edit Order</button>
          <button style={{background:"rgb(62, 95, 202)", color:"white"}}>Edit Order</button>

        </div>
      <div>

        </div>

      </div>

      <div className="container">
       <div className="top">
         <div className="ordersContent">

         </div>
         <div className="ordersContent1">

         </div>
         <div className="ordersContent2">

         </div>

       </div>

       <div className="middle">
         <div className="ordersContent3">

         </div>
         <div className="ordersContent4">

         </div>

       </div>
        
        
        <div className="ordersContent5">

        </div>
        

      </div>
        

    </div>
  )
}

export default Header;