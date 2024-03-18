import React from 'react'
import { Box, Grid, IconButton, Tooltip } from "@mui/material"
import { matBlack, orange } from '../constants/color.js'
import { KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

const Groups = () => {

  const navigate = useNavigate();

  const navigateBack = () => { navigate("/") }

  const handleMobile = () => { };
  const IconBtns = <>

    <Box sx={{
      display: {
        xs: "block",
        sm: "none",
        position: "fixed",
        right: "1rem",
        top: "1rem"
      }
    }}>
      <IconButton onClick={handleMobile}>
        <MenuIcon />
      </IconButton>
    </Box>
    <Tooltip title="back">
      <IconButton sx={{
        position: "absolute",
        top: "2rem",
        left: "2rem",
        bgcolor: matBlack,
        color: "white",
        ":hover": {
          bgcolor: "rgba(0,0,0,0.7)"
        }
      }} onClick={navigateBack}>
        <KeyboardBackspaceIcon />
      </IconButton>
    </Tooltip>
  </>;
  return (
    <Grid container height={"100vh"}>
      <Grid item sx={{
        display: { xs: "none", sm: "block" }
      }} sm={4} bgcolor={orange}>
        Group Lists
      </Grid>
      <Grid item xs={12} sm={8} sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        padding: "1rem 3rem"
      }}>
        {
          IconBtns
        }
      </Grid>
    </Grid>
  )
}

export default Groups
