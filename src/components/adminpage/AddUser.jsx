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
import { Link } from "react-router-dom";

const AddUser = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    createPassword: "",
    confirmPassword: "",
    userAccess: [],
  });

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
      userAccess: [
        ...prevFormData.userAccess,
        checked && name
      ],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://hubnex.cyclic.app/api/v1/user-role", formData)
      .then((response) => {
        console.log("Form data saved:", response.data);
      })
      .catch((error) => {
        console.log("Error saving form data:", error);
      });
    console.log(formData);
  };

  return (
    <div className='bg-slate-900 text-white'>
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
                    name="fullName"
                    value={formData.fullName}
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
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Create Password"
                    name="createPassword"
                    value={formData.createPassword}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormGroup>
                    <Typography>User Access</Typography>
                    <div className="grid grid-cols-2">
                      <FormControlLabel
                        control={
                          <Switch
                            name="dashboard"
                            checked={formData.userAccess.dashboard}
                            onChange={handleToggle}
                          />
                        }
                        label="Dashboard"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            name="company"
                            checked={formData.userAccess.company}
                            onChange={handleToggle}
                          />
                        }
                        label="Company"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            name="manageRoles"
                            checked={formData.userAccess.manageRoles}
                            onChange={handleToggle}
                          />
                        }
                        label="Manage Roles"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            name="form"
                            checked={formData.userAccess.forms}
                            onChange={handleToggle}
                          />
                        }
                        label="Forms"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            name="applications"
                            checked={formData.userAccess.applications}
                            onChange={handleToggle}
                          />
                        }
                        label="Applications"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            name="invoice"
                            checked={formData.userAccess.invoice}
                            onChange={handleToggle}
                          />
                        }
                        label="Invoice"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            name="recruiter"
                            checked={formData.userAccess.recruiter}
                            onChange={handleToggle}
                          />
                        }
                        label="Recruiter"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            name="referral"
                            checked={formData.userAccess.referral}
                            onChange={handleToggle}
                          />
                        }
                        label="Referral"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            name="cms"
                            checked={formData.userAccess.cms}
                            onChange={handleToggle}
                          />
                        }
                        label="CMS"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            name="payments"
                            checked={formData.userAccess.payments}
                            onChange={handleToggle}
                          />
                        }
                        label="Payments"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            name="notifications"
                            checked={formData.userAccess.notifications}
                            onChange={handleToggle}
                          />
                        }
                        label="Notifications"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            name="needHelp"
                            checked={formData.userAccess.needHelp}
                            onChange={handleToggle}
                          />
                        }
                        label="Need Help"
                      />
                    </div>
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