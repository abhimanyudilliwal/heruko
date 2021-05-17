import React, { useState, useEffect } from 'react'
import { Card, Button,Modal } from 'react-bootstrap'
import Profile from '../Icon/Profile'
import './view.css'


import axios from 'axios'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Link, useHistory } from "react-router-dom";

function View() {
    let history = useHistory();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selected,setSelected]=useState({phone:"",fullname:"",_id:""})
  
    const [data, setData] = useState([])

    const onEdit = (item) => {
       
        handleShow(true)
        console.log(item)
        setSelected(item)
    }
    const Editdata = () => {

        const data={
            _id:selected._id,
            fullname:selected.fullname,
            phone:selected.phone
        }

        axios.post('http://localhost:3001/api/update', data)
            .then(function (response) {
                console.log(response.data);
                console.log(response.data.data);
                NotificationManager.success('Successfully Update details');
                history.push("/home");

            })
            .catch(function (error) {
                console.log(error);
                NotificationManager.error("Please try some time ")
            })

}
        

    

    useEffect(() => {
        let data11 = localStorage.getItem("getId")
        const body = {
            "_id": data11
        }

        console.log({ data11 })
        axios.post('http://localhost:3001/api/userId', body)
            .then(function (response) {
                console.log(response.data);
                console.log(response.data.data);
                setData(response.data.data)
                console.log(data)

            })
            .catch(function (error) {
            })

    }, [])





    return (
        <>
        <Profile />
         <div className='container'>
            <div className='row'>
                <div className='col-2'></div>

                <div className='col-8'>
                    <h1 style={{textAlign:'center'}}>View Profile</h1>


                    <Card className='clcardland'>
                        <Card.Body>
                            {data.map((item, index) => {
                                return (
                                    <>
                                    <div key={index} className='land'  >
                                        <input type='text'  value={item.fullname}  disabled /><br />
                                        <input type='text' value={item.phone}  disabled /><br />
                                        <input type='text' value={item.email} disabled />
                                        <button type='submit' onClick={ () => onEdit(item)}  >Edit the Infomation </button>
                                    </div>
                                     <Modal show={show} onHide={handleClose}>
                                     <Modal.Header closeButton>
                                       <Modal.Title>Edit Informaion</Modal.Title>
                                     </Modal.Header>
                                     <Modal.Body><input type='text' value={selected.fullname} onChange={(e) => {setSelected({ ...selected,fullname:e.target.value })} } />
                                     <input type='text' value={selected.phone} onChange={(e) => {setSelected({ ...selected,phone:e.target.value })} } /></Modal.Body>
                                     <Modal.Footer>
                                       <Button className='editclose' variant="secondary" onClick={handleClose}>
                                                Close
                                       </Button>
                                       <Button className='editsave' variant="primary" onClick={Editdata }>
                                                Save Changes
                                       </Button>
                                     </Modal.Footer>
                                   </Modal>
                                   </>
                                )
                            })}
                        </Card.Body>


                    </Card>



                </div>

                <div className='col-2'></div>
            </div>
        </div>

        </>

    )
}

export default View
