import React from 'react'
import Badge from "react-bootstrap/Badge"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"


export const Issue = (props) => {

  return (
    <Card className='issue--container'>
        <Card.Header>Issue Id:{props._id}</Card.Header>
        <p><strong>Assigned to:</strong> {props.developer}</p>
        <p><strong>Priority:</strong><Badge pill bg="warning" text="dark">{props.priority}</Badge></p>
        <Card.Text>
        <strong>Description:</strong> {props.description}
        </Card.Text> 
        <Button className='delete--button' variant="warning" size="sm" onClick={() => props.delete(props._id)}>Delete</Button>
    </Card>
  );
};

export default Issue;
