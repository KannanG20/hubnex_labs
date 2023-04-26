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
import { Link, useNavigate } from "react-router-dom";

const ManageRoles = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  console.log(data);

  useEffect(() => {
    axios.get(`https://${import.meta.env.VITE_API_URL}/api/v1/user-roles`)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toggleStatus = (id) => {
    const updatedData = data.map((row) =>
      row._id === id ? { ...row, status: !row.status } : row
    );
    setData(updatedData);
    axios.put(`https://${import.meta.env.VITE_API_URL}/v1/user-role/${id}`, updatedData.find((row) => row._id === id))
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (id) => {
    navigate(`/admin/manage-roles/edit-user/${id}`)
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((row) => row._id !== id);
    setData(updatedData);
    axios.delete(`https://${import.meta.env.VITE_API_URL}/api/v1/user-role/${id}`)
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='text-white h-auto'>
      <div className="flex items-center justify-between my-3 mb-5">
        <h1 className="text-3xl font-bold">ManageRoles</h1>
        <Link to="/admin/manage-roles/add-user" className="bg-white text-black px-3 py-2 rounded-lg text-lg">Add Users <AddRoundedIcon /></Link>
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
              <TableRow key={row._id}>
                <TableCell sx={{ color: "#ffffff" }}>{row._id}</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>{row.fullname}</TableCell>
                <TableCell>
                  <Switch
                    color="success"
                    checked={row.status}
                    onChange={() => toggleStatus(row._id)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    color="info"
                    aria-label="edit"
                    onClick={() => handleEdit(row._id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    aria-label="delete"
                    onClick={() => handleDelete(row._id)}
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