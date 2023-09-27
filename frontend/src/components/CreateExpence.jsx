import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { EDIT_DATA, IS_EXPENCE_POPUP } from '../redux/constants';


function CreateExpence({ createNewExpence, data, confirmEdit }) {
    const newdate = new Date();
    const month = newdate.getMonth() + 1;
    const monthnow = newdate.getMonth() > 8 ? newdate.getMonth() + 1 : "0" + (month);
    const dateNow = newdate.getDate() > 8 ? newdate.getDate() : "0" + (newdate.getDate());
    const [date, setDate] = useState(`${newdate.getFullYear()}-${monthnow}-${dateNow}`);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const dispatch = useDispatch();
    const isExpencePopup = useSelector((state) => state.isExpencePopup);
    // setTitle(temptitle?temptitle:"")
    const editdata = useSelector((state) => state.editData);

    useEffect(() => {
        setTitle(editdata ? editdata.title : "");
        setDate(editdata ? editdata.date : "");
        setAmount(editdata ? editdata.amount : "");

    }, [editdata])
    const clearData = () => {
        dispatch({
            type: IS_EXPENCE_POPUP,
            data: false
        });
        dispatch({
            type: EDIT_DATA,
            data: ""
        });
    }
    return (
        <>
            <Modal show={isExpencePopup} onHide={() => clearData()}>
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
                    <Button variant="secondary" onClick={() => clearData(false)}>
                        Close
                    </Button>
                    {!data && <Button variant="primary" onClick={() => { createNewExpence({ date, amount, title }); clearData() }}>
                        Add Expence
                    </Button>}
                    {data && <Button variant="primary" onClick={() => { confirmEdit({ date, amount, title, _id: editdata._id }); clearData() }}>
                        Update
                    </Button>}

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateExpence;