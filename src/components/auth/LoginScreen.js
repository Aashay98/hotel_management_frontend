import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import { ErrorMessage, Form, Formik } from "formik";
import { loginValidationSchema } from "../../utility/validators";

const defaultTheme = createTheme();

const LoginScreen = () => {
  const initialValue = {
    username: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.info("submitting");
    setTimeout(() => {
      setSubmitting(false);
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "max-content",
              mt: 1,
              boxShadow:
                " 0 26px 58px 0 rgba(0, 0, 0, .22), 0 5px 14px 0 rgba(0, 0, 0, .18)",
              padding: 5,
              margin: 5,
              background: "white",
              borderRadius: 5,
            }}
          >
            <Typography component="h2" variant="div">
              Hotel ABC
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h2" variant="div">
              Sign in
            </Typography>
            <Formik
              initialValues={initialValue}
              validationSchema={loginValidationSchema}
              onSubmit={handleSubmit}
            >
              {({
                submitForm,
                isSubmitting,
                errors,
                touched,
                handleBlur,
                values,
                handleChange,
              }) => {
                return (
                  <Form>
                    <Box>
                      <TextField
                        name="username"
                        margin="dense"
                        fullWidth
                        value={values.username}
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={<ErrorMessage name="username" />}
                        error={errors.username && touched.username}
                        label="Username"
                      ></TextField>
                      <br />
                      <TextField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        name="password"
                        margin="dense"
                        label="Password"
                        helperText={<ErrorMessage name="password" />}
                        error={errors.password && touched.password}
                        fullWidth
                        type="password"
                      ></TextField>
                      <br />
                      <br />
                      <Button
                        type="submit"
                        fullWidth
                        onClick={submitForm}
                        variant="contained"
                        color="primary"
                        startIcon={
                          isSubmitting ? (
                            <CircularProgress size="0.9rem" />
                          ) : undefined
                        }
                      >
                        {isSubmitting ? "Submitting" : "Login"}
                      </Button>
                      <br />
                      <br />
                      <Grid container>
                        <Grid item xs>
                          <Link
                            to="/forgotpassword"
                            style={{ paddingRight: 15 }}
                          >
                            Forgot password?
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link to="/signup" style={{ paddingLeft: 15 }}>
                            {"Don't have an account? Sign Up"}
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default LoginScreen;
