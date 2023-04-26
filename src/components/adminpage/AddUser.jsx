import React, { useState } from "react";
import {
  TextField,
  Switch,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Button,
  Grid,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
    user_access: [],
  });

  const navigate = useNavigate()
  const errorNotifs = (err)=> {
    toast.error(err)
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleToggle = (e) => {
    const { name, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      userAccess: Array.isArray(prevFormData.userAccess)
        ? [...prevFormData.userAccess, checked && name]
        : [checked && name],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://${import.meta.env.VITE_API_URL}/api/v1/user-role`, formData)
      .then((response) => {
        navigate('/admin/manage-roles')
      })
      .catch((error) => {
        errorNotifs("Something went wrong, try again")
      });
  };

  return (
    <div className=' text-white h-auto overflow-y-auto'>
      <ToastContainer/>
      <h1 className="text-3xl font-bold mt-4 mb-8">Add User</h1>
      <Box>
        <Paper elevation={3}>
          <Box sx={{ p: 5 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Confirm Password"
                    name="confirm_password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormGroup>
                    <Typography>User Access</Typography>
                    <FormControlLabel
                      control={
                        <Switch
                          name="cms"
                          checked={formData.userAccess?.cms}
                          onChange={handleToggle}
                        />
                      }
                      label="CMS"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          name="form"
                          checked={formData.userAccess?.forms}
                          onChange={handleToggle}
                        />
                      }
                      label="Forms"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          name="manageRoles"
                          checked={formData.userAccess?.manageRoles}
                          onChange={handleToggle}
                        />
                      }
                      label="Manage Roles"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          name="testimonial"
                          checked={formData.userAccess?.testimonial}
                          onChange={handleToggle}
                        />
                      }
                      label="Testimonial"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
              <div className="flex justify-end mt-5">
                <Link to="/admin/manage-roles"><Button variant="contained" color="error">Discard</Button></Link>
                <Button type="submit" variant="contained" sx={{ marginLeft: "10px" }}>Save</Button>
              </div>
            </form>
          </Box>
        </Paper>
      </Box>
    </div>
  )
}

export default AddUser;