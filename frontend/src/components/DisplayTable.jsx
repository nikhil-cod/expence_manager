import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import CreateExpence from './CreateExpence';
import { createExpence, deleteExpence, editExpence, getExpence } from '../services/apiservices';
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EDIT_DATA, IS_EXPENCE_POPUP } from '../redux/constants';
import { months } from '../utils/required';
function DisplayTable() {
  const [openCreateExpence, setOpenCreateExpence] = useState(false);
  const [expences, setExpences] = useState([{}]);
  let totalAmount =0;
  const [data, setData] = useState("");
  const monthState = useSelector((state) => state.monthToShow);
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, [])


  const getData = async () => {
    await getExpence().then((data) => {
      setExpences(data);
    });
  }

  const setCreateExpence = (arg, data) => {
    setOpenCreateExpence(arg);
  }

  const createNewExpence = async (data) => {
    await createExpence(data).then(() => {
      getData();
    });
    setOpenCreateExpence(false);
  }

  const deleteData = async (data) => {
    await deleteExpence(data).then(() => {
      getData();
    })
  }

  const editData = async (data1) => {
    console.log("Edit data", data1)
    setData(data1);

    dispatch({
      type:EDIT_DATA,
      data:data1
    });
    
    dispatch({
      type:IS_EXPENCE_POPUP,
      data:true
    });
  }


  const confirmEdit = async (data) => {
    await editExpence(data).then(() => {
      getData();
      dispatch({
        type:EDIT_DATA,
        data:""
      });
    })
  }
  return (
    <Container>
      <Table striped bordered>
      {<CreateExpence setCreateExpence={setCreateExpence} createNewExpence={createNewExpence} data={data ? data : ""} confirmEdit={confirmEdit}/>}
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Money Spent</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            expences?.map((data, index) => {
              var arr = data?.date?.split("-");
              if(arr && monthState==arr[1]){
                totalAmount+=data?.amount;
              return <tr>
                <td>{data?.date}</td>
                <td>{data?.title}</td>
                <td>{data?.amount}</td>
                <td className='text-center'><FaPen className='cursor-pointer' onClick={() => editData(data)} /></td>
                <td className='text-center'><FaTrashAlt className='cursor-pointer' onClick={() => deleteData(data)} /></td>
              </tr>
              }
            })
          }
        </tbody>
      </Table>
      {/* <Row className='m-1' style={{backgroundColor:"#e2e3e5",borderRadius:"4px", height:"50px", border:"3px groove lightgrey"}}> */}
        {/* <Col>1 of 1</Col> */}
        <div className='py-1 px-3' style={{backgroundColor:"#e2e3e5",borderRadius:"2px", height:"50px", border:"1px groove lightgrey"}}>
        <h3 className='text-end' style={{color:"gray"}}>You have spent {totalAmount} in {months[monthState-1]}.</h3>
        </div>
      {/* </Row> */}
    </Container>
  );
}

export default DisplayTable;