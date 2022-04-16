import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import { postIssue } from '../../Services/httpRequests';
import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/esm/Button';


export const AddIssue = () => {

  const [formData, setFormData] = useState(
    {
      developer: "",
      description: "",
      priority: "",
    });

  const [show, setShow] = useState(false);

  const [error, setError] = useState(false)
 
  const handleChange = (event) => {
    setFormData(prevData => {
      return {...prevData, [event.target.name] : event.target.value}
    })
  };

  const sendIssue = (formData) => {
    if (!formData.developer || !formData.description || !formData.priority) {
      setShow(true)
      setError(true)
      return;
    }
    setShow(true)
    postIssue(formData);
  };

  const handleClose = () => {
    setShow(false)
  }

  return (
    <div className='container-fluid'>
      <div className='d-lg-flex flex-column add--container'>
        <label>Developer</label>
        <input
            type="text" 
            name="developer" 
            placeholder='Assigned to...' 
            onChange={handleChange}
            label="developer"
            value={formData.developer}
        />
        <label>Priority</label>
        <input 
            type="text" 
            name="priority" 
            placeholder='Priority' 
            onChange={handleChange} 
            label="priority"
            value={formData.priority}
        />
        <label>Description</label>
        <input
            type="text" 
            name="description" 
            placeholder='Description...' 
            onChange={handleChange} 
            value={formData.description}
        />
        <Button
            variant="warning"
            onClick={()=> sendIssue(formData)}
        >
            Add
        </Button>
      </div>
      <Button className='dashboard--button'>
        <Link style={{ textDecoration: 'none', color: "black" }} to="/">To dashboard</Link>
      </Button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <p>{!error? "Added issue" : "All three inputs needs to be filled before posting the issue!"}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="primary" onClick={handleClose}>Understood</Button>
        </Modal.Footer>
      </Modal>

    </div>
    
  );
};

export default AddIssue;
