import React, { useState } from 'react'
import { Container, Paper, Typography, TextField, Button, Stack, Avatar, IconButton } from "@mui/material"
import { CameraAlt as CameraAltIcon } from "@mui/icons-material"
import { VisuallyHiddenInput } from "../components/styles/StyledComponents"
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp"
import { usernameValidator } from "../utils/validators.js"

const Login = () => {

  const [isLogin, setIsLogin] = useState(true)

  const toggleLogin = () => setIsLogin((prev) => !prev)

  const userName = useInputValidation("", usernameValidator);
  const firstName = useInputValidation("");
  const middleName = useInputValidation("");
  const lastName = useInputValidation("");
  const password = useStrongPassword("",);
  const confirmPassword = useInputValidation("");

  const avatar = useFileHandler("single", 2)

  const handleLogin = (e) => {
    e.preventDefault();
  }

  const handleRegister = (e) => {
    e.preventDefault();
  }

  return (
    <div style={{
      backgroundImage: "linear-gradient(rgb(255,255,209), rgb(249, 159, 159))",
    }}>
      <Container component="main" maxWidth="xs" sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Paper elevation={3} sx={{ display: "flex", padding: 4, flexDirection: "column", alignItems: "center" }}>
          {
            isLogin ?
              <>
                <Typography variant="h5">Login</Typography>
                <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleLogin}>
                  <TextField required fullWidth label="Username" margin="normal" variant="outlined" value={userName.value} onChange={userName.changeHandler} />
                  {
                    userName.error &&
                    <Typography color="error" variant='caption'>{userName.error}</Typography>
                  }

                  <TextField required fullWidth label="Password" type="password" margin="normal" variant="outlined" value={password.value} onChange={password.changeHandler} />
                  {
                    password.error &&
                    <Typography color="error" variant='caption'>{password.error}</Typography>
                  }
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    color="primary"
                    sx={{ marginTop: "1rem" }}
                  >Login
                  </Button>

                  <Typography textAlign={"center"} m={"1rem"}>Or Not Having An Account Please Register From Below Link</Typography>

                  <Button
                    type="submit"
                    fullWidth
                    variant="text"
                    color="secondary"
                    sx={{ marginTop: "1rem" }}
                    onClick={toggleLogin}
                  >Register</Button>
                </form>
              </>
              :
              <>
                <Typography variant="h5">Register</Typography>
                <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleRegister}>
                  <Stack position={"relative"} width="10rem" margin={"auto"}>
                    <Avatar sx={{ width: "10rem", height: "10rem", objectFit: "contain" }} src={avatar.preview} />

                    <IconButton sx={{
                      position: "absolute", bottom: "0", right: "0", color: "white", backgroundColor: "rgba(0,0,0,0.5)", ".hover": {
                        backgroundColor: "rgba(0,0,0,0.7)"
                      }
                    }} component="label">
                      <>
                        <CameraAltIcon />
                        <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                      </>
                    </IconButton>
                  </Stack>
                  {
                    avatar.error &&
                    <Typography m={"1rem auto"} width={"fit-content"} display={"block"} color="error" variant='caption'>{avatar.error}</Typography>
                  }

                  <TextField required fullWidth label="First Name" margin="normal" variant="outlined" value={firstName.value} onChange={firstName.changeHandler} />
                  <TextField fullWidth label="Middle Name" margin="normal" variant="outlined" value={middleName.value} onChange={middleName.changeHandler} />
                  <TextField required fullWidth label="Last Name" margin="normal" variant="outlined" value={lastName.value} onChange={lastName.changeHandler} />
                  <TextField required fullWidth label="Username" margin="normal" variant="outlined" value={userName.value} onChange={userName.changeHandler} />
                  {
                    userName.error &&
                    <Typography color="error" variant='caption'>{userName.error}</Typography>
                  }
                  <TextField required fullWidth label="Password" type="password" margin="normal" variant="outlined" value={password.value} onChange={password.changeHandler} />
                  {
                    password.error &&
                    <Typography color="error" variant='caption'>{password.error}</Typography>
                  }
                  <TextField required fullWidth label="Confirm Password" type="password" margin="normal" variant='outlined' value={confirmPassword.value} onChange={confirmPassword.changeHandler} />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    color="primary"
                    sx={{ marginTop: "1rem" }}
                  >Register
                  </Button>

                  <Typography textAlign={"center"} m={"1rem"}>Or Not Having An Account Please Register From Below Link</Typography>

                  <Button
                    type="submit"
                    fullWidth
                    variant="text"
                    color="secondary"
                    sx={{ marginTop: "1rem" }}
                    onClick={toggleLogin}
                  >Login</Button>
                </form>
              </>
          }
        </Paper>
      </Container >

    </div>
  )
}

export default Login
