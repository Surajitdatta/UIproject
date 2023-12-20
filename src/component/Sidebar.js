import React from 'react'
import "./sidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

import { LuUserCircle2 } from "react-icons/lu";
import { MdOutlineAccountBalance } from "react-icons/md";
import { SiAuthelia } from "react-icons/si";
import { MdCorporateFare } from "react-icons/md";
import { MdSocialDistance } from "react-icons/md";

import { FaBloggerB } from "react-icons/fa6";
import { FaQuora } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { GoProjectTemplate } from "react-icons/go";
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="logo">
            <img src="https://keenthemes.com/metronic/assets/media/logos/launcher.svg" height="40px" width="50%"/>
        </div>
        
        <div className="logo dashboard">
            <div className="icon_content"><MdOutlineDashboard className="dashboartIcon"/> Dashboard </div>
            <div className='accordion'>
                <RiArrowDropDownLine/>

            </div>

        </div>

        <div className="title">
            <p>Pages</p>
        </div>
        <div className="profile dashboard">
            <div className="icon_content"><LuUserCircle2 className="dashboartIcon"/> User </div>
            <div className='accordion'>
                <RiArrowDropDownLine/>

            </div>

        </div>


        <div className="profile dashboard">
            <div className="icon_content"><MdOutlineAccountBalance className="dashboartIcon"/> Account </div>
            <div className='accordion'>
                <RiArrowDropDownLine/>

            </div>

        </div>

        <div className="profile dashboard">
            <div className="icon_content"><SiAuthelia className="dashboartIcon"/> Authentication </div>
            <div className='accordion'>
                <RiArrowDropDownLine/>

            </div>

        </div>

        <div className="profile dashboard">
            <div className="icon_content"><MdCorporateFare className="dashboartIcon"/> Corporate </div>
            <div className='accordion'>
                <RiArrowDropDownLine/>

            </div>

        </div>

        <div className="profile dashboard">
            <div className="icon_content"><MdSocialDistance className="dashboartIcon"/> Social </div>
            <div className='accordion'>
                <RiArrowDropDownLine/>

            </div>

        </div>

        <div className="profile dashboard">
            <div className="icon_content"><FaBloggerB className="dashboartIcon"/> Blog </div>
            <div className='accordion'>
                <RiArrowDropDownLine/>

            </div>

        </div>

        <div className="profile dashboard">
            <div className="icon_content"><FaQuora  className="dashboartIcon"/> FAQ </div>
            <div className='accordion'>
                <RiArrowDropDownLine/>

            </div>

        </div>

        <div className="profile dashboard">
            <div className="icon_content"><MdPriceChange className="dashboartIcon"/> Pricing </div>
            <div className='accordion'>
                <RiArrowDropDownLine/>

            </div>

        </div>

        


        <div className="title">
            <p>APP</p>
        </div>


        <div className="profile dashboard">
            <div className="icon_content"><GoProjectTemplate className="dashboartIcon"/> Project</div>
            <div className='accordion'>
                <RiArrowDropDownLine/>

            </div>

        </div>


        <div className="title" >
            <p>eCommerce</p>
        </div>

        <div className="catalog">
            <ul>
                <li>Catalog</li>

            </ul>
            <ul>
                <li>sales</li>
                <ul>
                    <li>order listing</li>
                    <li>Order details</li>
                </ul>
                
            </ul>
            
        </div>

        <div className="btn">
            <button>Does & component</button>
        </div>



        

    </div>
  )
}

export default Sidebar;