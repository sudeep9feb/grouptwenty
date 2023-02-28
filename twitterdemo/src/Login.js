import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

function Login() {

    // validation rules with Yup
    const formSchema = Yup.object({
        username: Yup.string().required("Username is required")
            .min(5, "no less than 5 characters").max(10, "no more than 10 characters"),
        email: Yup.string().required("Email is required").email("Not a valid email"),
        password: Yup.string().required("Password is required")
    })

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={"300px"}
            boxShadow={"3px 3px 3px #ccc"}
            margin="auto"
            marginTop={"20px"}
            padding="20px"
        >
            <form onSubmit={formik.handleSubmit}>
                <Stack
                    direction={"column"}
                    spacing={3}
                >
                    <Typography variant='h4' sx={{ textAlign: "center", color: "#ccc" }}>
                        Login Page
                    </Typography>
                    <TextField
                        variant='filled'
                        label="Username"
                        placeholder='Enter a username'
                        type={"text"}
                        onChange={formik.handleChange}
                        name="username"
                        value={formik.values.username}
                    >
                    </TextField>
                    <TextField
                        variant='filled'
                        label="Email"
                        placeholder='Enter a email'
                        type={"email"}
                        onChange={formik.handleChange}
                        name="email"
                        value={formik.values.email}
                        error={Boolean(formik.touched.email && formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    >
                    </TextField>
                    <TextField
                        variant='filled'
                        label="Password"
                        placeholder='Enter a password'
                        type={"password"}
                        onChange={formik.handleChange}
                        name="password"
                        value={formik.values.password}

                    >
                    </TextField>
                    <Button variant='contained' type='submit'>Login</Button>

                </Stack>
            </form>

        </Box>
    )
}

export default Login