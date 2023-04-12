import { FaClipboardList } from 'react-icons/fa'
import { BsFillClipboardCheckFill } from 'react-icons/bs'
import './priorauthorization.css'
import { useState } from 'react';
import { Modal, Button} from 'react-bootstrap';
import { CiUser } from 'react-icons/ci'
import doctorImage from '../../../Assets/Images/doctor.jpg'
import Table from 'react-bootstrap/Table';
import { Form } from 'react-bootstrap'

function ModalScreen(props){
    return(
            <Modal {...props} centered className='modal-xl'>
                
                <Modal.Header closeButton = {true}>
                </Modal.Header>

                <Modal.Body className = ''>
                    <div className='row'>
                        <div className='d-flex flex-column col-5'>
                            <div className='card p-3 d-flex flex-row justify-content-around align-items-center modalCard'>
                                <div><FaClipboardList size='50px'/></div>
                                <div className='d-flex flex-column'>
                                    <div className='boldText'>ClaimID</div>
                                    <div className='boldText'>Date of Service</div>
                                    <div className='boldText'>Status</div>
                                </div>
                                <div className='d-flex flex-column'>
                                    <div>200003</div>
                                    <div>1/10/2023</div>
                                    <div>Pending</div>
                                </div>
                            </div>

                            <div className='card p-3 d-flex modalCard'>
                                <div className='d-flex'>
                                    <div style={{margin : '0% '}}>
                                        <CiUser size = '70px'/>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <h5 style={{marginBottom : '1%'}} className='boldText'>Linda Harris</h5>
                                        <div style={{fontSize : '12px'}} className='colorText'>11/09/1945(76 yrs), F</div>
                                        <div style={{fontSize : '12px'}} className='boldText'>Non-Smoker</div>
                                    </div>
                                </div>
                                
                                <div className='justify-content-between d-flex colorText'>
                                    <div className='d-flex flex-column'>
                                        <div>EMPI/MRN</div>
                                        <div>P078645</div>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <div>Phone</div>
                                        <div>512-265-4081</div>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <div>PCP</div>
                                        <div>Dr. Karen Carter</div>
                                    </div>
                                </div>
                            </div>

                            <div className='card p-3 d-flex flex-row justify-content-between modalCard'>
                                <div className='d-flex flex-column colorText '>
                                    <h5>Dr. Roger Lenon</h5>
                                    <div className='boldText'>MD NPI 43333</div>
                                    <div className='boldText'>Holtzman Medical Group</div>
                                    <div>Contact No. 230012323</div>
                                </div>
                                <img src = {doctorImage} alt = "Doctor" style={{width : '140px'}}></img>
                            </div>

                            <div className='card p-3 d-flex colorText modalCard'>
                                <div style={{marginLeft : ''}}>
                                    <h5>Prior Authorization</h5>
                                    <div><span className='boldText'>RID</span>: 200003</div>
                                    <div><span className='boldText'>AuthID:</span> 63edfi3jfdi39fl34</div>
                                    <div className='boldText'>Services Requested: </div>
                                    <div><span className = 'boldText'>- CPT 92227 x 2 visits</span> Annually</div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex flex-column col-7'>
                            <div className='card p-3 d-flex colorText modalCard'>
                                <h5>Primary Payer</h5>
                                <div className=''>VETERANS ADMINISTRATION - PRESCOTT VA [199311] 123456789 (Contracts)</div>
                                <div><span className='boldText'>EDI- </span>199311</div>
                                <div><span className='boldText'>Assignment- </span> Not Assigned</div>
                                <div><span className='boldText'>Force Drop to Paper</span>- No</div>
                            </div>
                            <div className='card p-3 d-flex colorText modalCard'>
                                <h5>Secondary Payer</h5>
                                <div className=''>Humana (Medicare Replacement/Advantage - PPO) [47006] 123456789 (Contracts)</div>
                                <div><span className = 'boldText'>EDI- </span>47006</div>
                                <div><span className='boldText'>Assignment- </span>Not Assigned</div>
                                <div><span className='boldText'>Force Drop to Paper- </span>No</div>
                            </div>

                            <Table className='table table-sm table-borderless modalCard' style={{border: '1px solid #D3D3D3'}}>
                                <thead style={{backgroundColor : '#112041', color: 'white'}}>
                                    <tr>
                                        <td>CPT</td>
                                        <td>Diagnosis</td>
                                        <td>Units</td>
                                        <td>Price</td>
                                    </tr>
                                </thead>
                                <tbody className='colorText'>
                                    <tr>
                                        <td>92227</td>
                                        <td>Imaging of Retina for detection or monitoring of disease</td>
                                        <td>2</td>
                                        <td>$432</td>
                                    </tr>
                                    <tr>
                                        <td colSpan='2'></td>
                                        <td colSpan='2' className='boldText'>Total: $864</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <Form>
                                <Form.Group>
                                    <Form.Label className='boldText'>Note for Provider</Form.Label>
                                    <Form.Control as = 'textarea' placeholder='Text goes here...' rows = {3}/>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant='danger'>Reject with note</Button>
                    <Button style={{backgroundColor: '#112041'}} onClick = {props.onHide}>Approve</Button>
                </Modal.Footer>
            </Modal>
    )
}

function Card(props){
    let icon;
    if(props.status === 'Pending'){
        icon = <FaClipboardList size = '30px' />
    }
    else {
        icon = <BsFillClipboardCheckFill size = '30px' />
    }

    const [showModal, setShowModal] = useState(false);

    return(
            <div className= 'card p-3 cardBox' id = 'parent'>
                <ModalScreen show = {showModal} onHide = {() => setShowModal(false)}/>
                <div className= 'row d-flex align-items-center'>
                    <div className = 'col-1'>
                        <div className='d-flex flex-column align-items-center'>
                            <div className='mb-1 cardSubtitles'>{props.status}</div>
                            <div>{icon}</div>
                        </div>
                    </div>
                    <div className = 'col-3'>
                        <div className='cardSubtitles'>Request ID : {props.requestid}</div>
                        <div className='cardSubtitles'>Date : {props.date}</div>
                        <div>Medium Urgency</div>
                    </div>
                    <div className = 'col-3'>
                        <div className='cardSubtitles'>Services</div>
                        <div className='cardText'><span style={{fontWeight : 'bold'}}>- CPT {props.cpt1} X {props.vis1} visits</span> {props.dur1}</div>
                        {props.cpt2 &&
                            <div className='cardText'><span style={{fontWeight : 'bold'}}>- CPT {props.cpt2} X {props.vis2} visits</span> {props.dur2}</div>
                        }
                    </div>
                    <div className = 'col-3'>
                        <div className='cardSubtitles'>Requested By</div>
                        <div className='cardText'><span style={{fontWeight : 'bold'}}>{props.drname}</span></div>
                    </div>
                    <div className = 'col-2'>
                        <div className='d-flex flex-column align-items-center'>
                        {props.status === 'Pending' &&
                            <Button id = "approve" onClick = {() => setShowModal(true)}>Approve</Button>
                        }
                            <a href='https://www.google.com' style={{fontWeight: 'bold'}} className = 'cardText'>View Details</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card;