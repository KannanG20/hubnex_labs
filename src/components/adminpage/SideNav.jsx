import React, { useState } from 'react'
import logo from '@assets/logo.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import LayersIcon from '@mui/icons-material/Layers';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import IosShareIcon from '@mui/icons-material/IosShare';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PaymentIcon from '@mui/icons-material/Payment';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HelpIcon from '@mui/icons-material/Help';
import { Link } from 'react-router-dom';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const SideNav = ({ navbar }) => {

  const [cmsOpen, setCmsOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [referralOpen, setReferralOpen] = useState(false);
  const [manageRoleOpen, setManageRoleOpen] = useState(false);
  const [paymentsOpen, setPaymentsOpen] = useState(false);

  const handleCmsDropdown = ()=>{
    setCmsOpen((prev)=> !prev);
  }
  const handleFormDropdown = ()=>{
    setFormOpen((prev)=> !prev);
  }
  const handleManageRoleDropdown = ()=>{
    setManageRoleOpen((prev)=> !prev);
  }

  return (
    <div className=' hidden w-[30%] bg-slate-900 scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-900 h-full lg:flex flex-col py-5 items-center sticky left-0 top-0 overflow-y-auto'>
      <div className=' w-full flex gap-2 items-center justify-center'>
        <img src={logo} alt="logo" />
        <Link to='/admin' className=' text-3xl text-white font-bold'>hubnex</Link>
      </div>

      <div className=' flex flex-col w-full h-full items-center py-5 gap-8 '>
        <div className=' w-[70%] m-auto h-full flex flex-col gap-8 text-base text-gray-300 font-semibold'>
          <hr className=' w-full border-[1px] border-white'/>
          
          

          <div className=' flex flex-col gap-4 items-center w-full'>
            <div className=' flex gap-4 items-start w-full'>
            <LayersIcon/>
              <div className=' flex flex-col w-full gap-5'>
                <span onClick={handleCmsDropdown} className=' cursor-pointer flex items-center'>CMS <span >{cmsOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDown />}</span></span>
                {cmsOpen &&
                <div className=' flex flex-col gap-2 '>
                  <Link to='/admin/terms-and-conditions'>Terms and conditions</Link>
                  <Link to='/admin/privacy-policy'>Privacy Policy</Link>
                  <Link to='/admin/data-protection'>Data Protection</Link>
                </div>
                }
              </div>
            </div>

          </div>
          <div className=' flex gap-4 flex-col items-center w-full'>
            <div className=' flex gap-4 items-start w-full'>
              <BackupTableIcon/>
              <div className=' flex flex-col w-full gap-5'>
              <span onClick={handleFormDropdown} className=' cursor-pointer flex items-center'>Forms <span >{formOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDown />}</span></span>
              {formOpen &&
                <div className=' flex flex-col gap-2 '>
                  <Link to='/admin/forms/invest'>Invest</Link>
                  <Link to='/admin/forms/contact'>Contact Us</Link>
                </div>
                }
              </div>
            </div>
          </div>
     

          <div className=' flex gap-4 flex-col items-center'>
            <div className=' flex gap-4 items-start w-full'>
              <ManageAccountsIcon/>
              <div className=' flex flex-col w-full gap-5'>
              <Link to='/admin/manage-roles' className=' flex items-center'>Manage Roles</Link>
              </div>
            </div>
          </div>

          
          <div className=' flex gap-4 flex-col items-center'>
            <div className=' flex gap-4 items-start w-full'>
              <ManageAccountsIcon/>
              <div className=' flex flex-col w-full gap-5'>
              <Link to='/admin/manage-partners' className=' flex items-center'>Manage Partners</Link>
              </div>
            </div>
          </div>



          

          <div className=' flex gap-4 items-center'>
            <FileOpenIcon/>
            <Link to='/admin/application'>Testimonial</Link>
          </div>
          
          
          <hr className=' w-full border-[1px] border-white'/>
        </div>
      </div>

    </div>
  )
}

export default SideNav