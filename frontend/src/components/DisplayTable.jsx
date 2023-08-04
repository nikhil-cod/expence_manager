import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import CreateExpence from './CreateExpence';
import Button from 'react-bootstrap/Button';
import { createExpence, getExpence } from '../services/apiservices';
import { FaTrashAlt, FaPen } from "react-icons/fa";
function DisplayTable() {
  const [openCreateExpence, setOpenCreateExpence] = useState(false);
  const [expences, setExpences] = useState([{}]);

  useEffect(() => {
    getData();
  }, [])


  const getData = () => {
    getExpence().then((data) => {
      setExpences(data);
    });
  }

  const setCreateExpence = (arg, data) => {
    setOpenCreateExpence(arg);
  }

  const createNewExpence = async (data) => {
    createExpence(data).then(() => {
      getData(data);
    });
    setOpenCreateExpence(false);
  }


  return (
    <>
      <Button onClick={() => setOpenCreateExpence(true)}>Create Expence</Button>
      {<CreateExpence openCreateExpence={openCreateExpence} setCreateExpence={setCreateExpence} createNewExpence={createNewExpence} />}
      <Table striped>
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
                <td><FaPen className='cursor-pointer' /></td>
                <td><FaTrashAlt className='cursor-pointer' /></td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </>
  );
}

export default DisplayTable;