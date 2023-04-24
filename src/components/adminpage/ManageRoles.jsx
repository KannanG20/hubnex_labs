import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import axios from "axios";

const initialData = [
  { id: 1, name: "Role 1", status: true },
  { id: 2, name: "Role 2", status: false },
  { id: 3, name: "Role 3", status: true },
  { id: 4, name: "Role 4", status: false },
];

const ManageRoles = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://hubnex.cyclic.app/api/v1/user-roles")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toggleStatus = (id) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, status: !row.status } : row
    );
    setData(updatedData);
    axios.put(`https://hubnex.cyclic.app/api/v1/user-role/${id}`, updatedData.find((row) => row.id === id))
      .catch((error) => {
        console.log(error);
      });
  };

  // for add role
  const handleAdd = (name) => {
    const newRole = { name, status: false };
    axios.post("https://hubnex.cyclic.app/api/v1/user-role", newRole)
      .then((response) => {
        setData([...data, { ...newRole, id: response.data.id }]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (id, name) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, name } : row
    );
    setData(updatedData);
    axios.put(`https://hubnex.cyclic.app/api/v1/user-role/${id}`, updatedData.find((row) => row.id === id))
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
    axios.delete(`https://hubnex.cyclic.app/api/v1/user-role/${id}`)
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='text-white'>
      <div className="flex items-center justify-between my-3 mb-5">
        <h1 className="text-3xl font-bold">ManageRoles</h1>
        <button className="bg-white text-black px-3 py-2 rounded-lg text-lg">Add Users <AddRoundedIcon /></button>
      </div>

      <TableContainer component={Paper} sx={{ background: "#0f172a" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", color: "#ffffff" }}>ID</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#ffffff" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#ffffff" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#ffffff" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={{ color: "#ffffff" }}>{row.id}</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>{row.name}</TableCell>
                <TableCell>
                  <Switch
                    color="success"
                    checked={row.status}
                    onChange={() => toggleStatus(row.id)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    color="info"
                    aria-label="edit"
                    onClick={() => handleEdit(row.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    aria-label="delete"
                    onClick={() => handleDelete(row.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ManageRoles