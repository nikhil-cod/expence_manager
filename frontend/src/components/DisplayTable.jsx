import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import CreateExpence from './CreateExpence';
import Button from 'react-bootstrap/Button';
import { expencedata } from '../services/tabledata';
function DisplayTable() {
  const [openCreateExpence, setOpenCreateExpence] = useState(false);
  const [expences, setExpences] = useState(expencedata);
  const setCreateExpence = (arg, data) => {
    setOpenCreateExpence(arg);
  }

  const createNewExpence = (data) => {
    setExpences([...expences, data]);
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
          </tr>
        </thead>
        <tbody>
          {
            expences.map((data, index) => {
              return <tr>
                <td>{data.date}</td>
                <td>{data.title}</td>
                <td>{data.amount}</td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </>
  );
}

export default DisplayTable;