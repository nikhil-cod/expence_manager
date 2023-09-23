import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import CreateExpence from './CreateExpence';
import Button from 'react-bootstrap/Button';
import { createExpence, deleteExpence, editExpence, getExpence } from '../services/apiservices';
import { FaTrashAlt, FaPen } from "react-icons/fa";
function DisplayTable() {
  const [openCreateExpence, setOpenCreateExpence] = useState(false);
  const [expences, setExpences] = useState([{}]);
  const [data, setData] = useState("");
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

  const editData = async (data) => {
    console.log("Edit data", data)
    setData(data);
    setOpenCreateExpence(true);
    // await editExpence(data).then(() => {
    //   getData();
    // })
  }


  const confirmEdit = async (data) => {
    await editExpence(data).then(() => {
      getData();
    })
  }
  return (
    <>
      <Button onClick={() => setOpenCreateExpence(true)}>Create Expence</Button>
      {openCreateExpence && <CreateExpence confirmEdit={confirmEdit} openCreateExpence={openCreateExpence} setCreateExpence={setCreateExpence} createNewExpence={createNewExpence} data={data ? data : ""} />}
      <Table striped className='m-2'>
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
                <td><FaPen className='cursor-pointer' onClick={() => editData(data)} /></td>
                <td><FaTrashAlt className='cursor-pointer' onClick={() => deleteData(data)} /></td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </>
  );
}

export default DisplayTable;