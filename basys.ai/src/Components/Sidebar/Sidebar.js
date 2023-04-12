import basysai from '../../Assets/Images/basys ai.png'
import './sidebar.css'
import { TbClipboardCheck } from 'react-icons/tb'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaPlusSquare } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function Sidebar(){
    return(
        <div className = 'd-flex flex-column navigation p-3 bg-light'>
            <img src={basysai} alt = 'logo' id = 'logo' className='mb-3'></img>
            <ul className='nav nav-pills flex-column'>
                <NavLink to='/' className = 'textNav'>
                    <li className='nav-item'>
                        <div className='d-flex nav-link' style={{alignItems : 'end'}}>
                            <div className='icons'><TbClipboardCheck  size = '25px'/></div>
                            <div className='textNav'>Prior Authorization</div>
                        </div>
                    </li>
                </NavLink>
                <NavLink to='/claims' className = 'textNav'>
                    <li className='nav-item'>
                        <div className='d-flex nav-link' style={{alignItems: 'end'}}>
                            <div className='icons'><RxHamburgerMenu size = '25px'/></div>
                            <div className='textNav'>Claims</div>
                        </div>
                    </li>
                </NavLink>

                <li className='nav-item'>
                    <div className='d-flex nav-link disabled' style={{alignItems : 'end'}}>
                        <div style={{marginLeft : '10px'}}><FaPlusSquare size = '25px'/></div>
                        <div style={{marginLeft : '10px'}}>Medical Records</div>
                    </div>
                </li>
                
                <NavLink to='/myProfile' className='textNav'>
                    <li className='nav-item'>
                        <div className='d-flex nav-link' style={{alignItems : 'end'}}>
                            <div className='icons'><FaUserCircle size = '25px'/></div>
                            <div className='textNav'>My Profile</div>
                        </div>
                    </li>
                </NavLink>
            </ul>
        </div>
    );
}

export default Sidebar;