import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, CircularProgress, Container, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { ErrorMessage, Form, Formik } from 'formik';
import { signUpValidationSchema } from '../../utility/validators';


const defaultTheme = createTheme();
const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get('username'),
        password: data.get('password'),
    });
};
const initialValue = {
    firstname:"",
    lastname:"",
    phoneNumber:"",
    email: "",
    username: "",
    password: "",
    state: "",
    city:"",
    address1:"",
    address2:"",
    confirmPassword: "",
    zipCode:""
};
const Signup = () => {
  return (
    <>
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" id="auth">
                <Box sx={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width:"max-content" , 
                    mt:1, boxShadow:'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', 
                    padding: 5, margin:5,
                    background:"white",
                    borderRadius: 5,
                }}>
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component="h2" variant="div">
                        Sign up
                    </Typography>
                    <Formik
                        initialValues={initialValue}
                        validationSchema={signUpValidationSchema}
                        onSubmit={handleSubmit}>
                        {({ submitForm, isSubmitting, errors, touched, handleBlur ,values, handleChange}) => {
                        return (<Form>
                            <Box>
                                <TextField 
                                    style={{ paddingRight:9 }}
                                    name="firstname"
                                    margin='dense'
                                    label="First Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={<ErrorMessage name="firstname" />}
                                    error={
                                        errors.firstname &&
                                        touched.firstname
                                    }
                                    type="text">
                                </TextField>
                                <TextField 
                                    name="lastname"
                                    margin='dense'
                                    label="Last Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={<ErrorMessage name="lastname" />}
                                    error={
                                        errors.lastname &&
                                        touched.lastname
                                    }
                                    type="text">
                                </TextField>
                                <br/>
                                <TextField 
                                    name="username"
                                    margin='dense'
                                    fullWidth
                                    value={values.username}
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={<ErrorMessage name="username" />}
                                    error={
                                        errors.username &&
                                        touched.username
                                    }
                                    label="Username">
                                </TextField>
                                <br/>
                                <TextField
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    name="password"
                                    margin='dense'
                                    label="Password"
                                    autoComplete="current-password"
                                    helperText={<ErrorMessage name="password" />}
                                    error={
                                        errors.password &&
                                        touched.password
                                    }
                                    fullWidth
                                    type="password">
                                </TextField>
                                <br/> 
                                <TextField
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    name="confirmPassword"
                                    margin='dense'
                                    label="Confirm Password"
                                    helperText={<ErrorMessage name="confirmPassword" />}
                                    error={
                                        errors.confirmpassword &&
                                        touched.confirmpassword
                                    }
                                    fullWidth
                                    type="password">
                                </TextField>
                                <br/> 
                                <TextField
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    name="email"
                                    margin='dense'
                                    label="Email Address"
                                    helperText={<ErrorMessage name="email" />}
                                    error={
                                        errors.email &&
                                        touched.email
                                    }
                                    fullWidth
                                    type="text">
                                </TextField>
                                <br/> 
                                <TextField
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phoneNumber}
                                    name="phoneNumber"
                                    margin='dense'
                                    label="Phone Number"
                                    helperText={<ErrorMessage name="phoneNumber" />}
                                    error={
                                        errors.phoneNumber &&
                                        touched.phoneNumber
                                    }
                                    fullWidth
                                    type="text">
                                </TextField>
                                <br/> 
                                <TextField
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.address1}
                                    name="address1"
                                    margin='dense'
                                    label="Address 1"
                                    helperText={<ErrorMessage name="address1" />}
                                    error={
                                        errors.address1 &&
                                        touched.address1
                                    }
                                    fullWidth
                                    type="text">
                                </TextField>
                                <br/> 
                                <TextField
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.address2}
                                    name="address2"
                                    margin='dense'
                                    label="Address 2"
                                    helperText={<ErrorMessage name="address2" />}
                                    error={
                                        errors.address2 &&
                                        touched.address2
                                    }
                                    fullWidth
                                    type="text">
                                </TextField>
                                <br/> 
                                <TextField
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.city}
                                    name="city"
                                    margin='dense'
                                    label="City"
                                    helperText={<ErrorMessage name="city" />}
                                    error={
                                        errors.city &&
                                        touched.city
                                    }
                                    fullWidth
                                    type="text">
                                </TextField>
                                <br/> 
                                <TextField
                                    style={{ paddingRight:9 }}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.state}
                                    name="state"
                                    margin='dense'
                                    label="State"
                                    helperText={<ErrorMessage name="state" />}
                                    error={
                                        errors.state &&
                                        touched.state
                                    }
                                    type="text">
                                </TextField>
                                <TextField
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.state}
                                    name="zipCode"
                                    margin='dense'
                                    label="ZipCode"
                                    helperText={<ErrorMessage name="zipCode" />}
                                    error={
                                        errors.zipCode &&
                                        touched.zipCode
                                    }
                                    type="text">
                                </TextField>
                                <br/>
                                <br/>
                                <Button 
                                    type="submit"
                                    fullWidth 
                                    onClick={submitForm}
                                    variant="contained" 
                                    color="primary"
                                    startIcon={
                                        isSubmitting ? (
                                        <CircularProgress size="0.9rem" />
                                        ) : undefined}> 
                                    {isSubmitting ? "Submitting" : "Submit"}
                                </Button>
                                <br/>
                                <br/>
                                <Grid container>
                                    <Grid item>
                                        <Link to="/login">
                                            {"Already have an account? Sign In"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>   
                        </Form>)}}  
                    </Formik>
                </Box>
            </Container>
        </ThemeProvider>
    </>
  )
}

export default Signup