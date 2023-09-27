import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import CreateExpence from './CreateExpence';
import { createExpence, deleteExpence, editExpence, getExpence } from '../services/apiservices';
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { EDIT_DATA, IS_EXPENCE_POPUP } from '../redux/constants';
function DisplayTable() {
  const [openCreateExpence, setOpenCreateExpence] = useState(false);
  const [expences, setExpences] = useState([{}]);
  const [data, setData] = useState("");
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
    <div className='p-4'>
      <Table striped bordered className='p-4'>
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
              return <tr>
                <td>{data?.date}</td>
                <td>{data?.title}</td>
                <td>{data?.amount}</td>
                <td className='text-center'><FaPen className='cursor-pointer' onClick={() => editData(data)} /></td>
                <td className='text-center'><FaTrashAlt className='cursor-pointer' onClick={() => deleteData(data)} /></td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default DisplayTable;