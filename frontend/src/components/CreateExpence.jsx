import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function CreateExpence({ openCreateExpence, setCreateExpence, createNewExpence, data, confirmEdit }) {
    const newdate = new Date();
    const month = newdate.getMonth() + 1;
    const monthnow = newdate.getMonth() > 8 ? newdate.getMonth() + 1 : "0" + (month);
    const dateNow = newdate.getDate() > 8 ? newdate.getDate() : "0" + (newdate.getDate());
    const [date, setDate] = useState(data.date ? data.date : `${newdate.getFullYear()}-${monthnow}-${dateNow}`);
    const [title, setTitle] = useState(data.date ? data.title : "");
    const [amount, setAmount] = useState(data.date ? data.amount : "");

    const clearData = () => {
        setDate("");
        setTitle("");
        setAmount("");
    }
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
                        <Form.Control placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='m-1'>
                        <Form.Label>Money Spent</Form.Label>
                        <Form.Control placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setCreateExpence(false)}>
                        Close
                    </Button>
                    {!data && <Button variant="primary" onClick={() => { createNewExpence({ date, amount, title }); clearData() }}>
                        Add Expence
                    </Button>}
                    {data && <Button variant="primary" onClick={() => { confirmEdit({ date, amount, title, _id: data._id }); clearData() }}>
                        Update
                    </Button>}

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateExpence;