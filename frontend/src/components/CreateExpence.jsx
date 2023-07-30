import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function CreateExpence({ openCreateExpence, setCreateExpence ,createNewExpence}) {
    const newdate = new Date();
    const month = newdate.getMonth()+1;
    const monthnow = newdate.getMonth()>8?newdate.getMonth()+1:"0"+(month);
    const [date, setDate] = useState(`${newdate.getFullYear()}-${monthnow}-${newdate.getDate()}`);
    const [title,setTitle]=useState("");
    const [amount,setAmount]= useState("");
    console.log("Date ==> ",date)

    
    return (
        <>
            <Modal show={openCreateExpence} onHide={() => setCreateExpence(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Expence</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className='m-1'>
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="datepic"
                            placeholder="DateRange"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='m-1'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className='m-1'>
                        <Form.Label>Money Spent</Form.Label>
                        <Form.Control placeholder="Amount"  value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setCreateExpence(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => createNewExpence({date,amount,title})}>
                        Add Expence
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateExpence;