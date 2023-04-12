import { AiOutlineSearch } from 'react-icons/ai'
import { AiTwotoneBell } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { RxExit } from 'react-icons/rx'
import './priorauthorization.css'
import Card from './Card'
import Sidebar from '../../Sidebar/Sidebar'
import './../../../App.css'

function PriorAuthorization(){
    return(
    <>
        <div className='sidebar'>
            <Sidebar/>
        </div>
        <div className='priorauthorization'>
            <div className="d-flex header" style={{justifyContent: 'space-between', alignContent : 'center'}}>
                <div><h2>Welcome Bayer!</h2></div>
                <div className='d-flex'>
                    <div style = {{margin : '0px 5px'}}><AiOutlineSearch size = '20px'/></div>
                    <div style = {{margin : '0px 5px'}}><AiTwotoneBell size = '20px'/></div>
                    <div style = {{margin : '0px 5px'}}><FaUserCircle size= '30px'/></div>
                    <div style = {{margin : '0px 5px'}}><RxExit size='20px'/></div>
                </div>
            </div>
            <h4 style={{marginBottom : '1%'}}>Manage Requests</h4>
            <h5>Pending</h5>
            <Card className = 'card' status = "Pending" requestid = "200005" date = "1/24/2023" cpt1 = '92227' vis1 = '2' dur1 = 'anually' cpt2 = '99211' vis2 = '2' dur2 = 'anually' drname = 'Dr. Roger Lenon, MD'/>
            <Card className = 'card' status = "Pending" requestid = "200004" date = "1/19/2023" cpt1 = '92227' vis1 = '2' dur1 = 'anually' cpt2 = '99211' vis2 = '1' dur2 = 'anually' drname = 'Dr. Roger Lenon, MD'/>
            <h5>Accepted</h5>
            <Card className = 'card' status = "Accepted" requestid = "200003" date = "1/15/2023" cpt1 = '92227' vis1 = '2' dur1 = 'anually' drname = 'Dr. Roger Lenon, MD'/>
            <Card className = 'card' status = "Accepted" requestid = "200002" date = "1/14/2023" cpt1 = '99091' vis1 = '2' dur1 = 'one time' cpt2 = '99211' vis2 = '2' dur2 = 'one time' drname = 'Dr. Roger Lenon, MD'/>
        </div>
    </>
    )
}

export default PriorAuthorization;