import React from 'react'
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material"
import { orange } from "../../constants/color.js"
import { Menu as MenuIcon, Search as SearchIcon, Add as AddIcon } from "@mui/icons-material"

const Header = () => {

  const handleMobile = () => {
    console.log("Mobile")
  }

  const openSearchDialog = () => {
    console.log("Open Search")
  }

  const openNewGroup = () => {
    console.log("Open New Group")
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position='static' sx={{ bgcolor: orange }} >
          <Toolbar>
            <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>Chat App</Typography>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color={"inherit"} onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1, }} />

            <Box>
              <IconButton color={"inherit"} size='large' onClick={openSearchDialog}>
                <SearchIcon />
              </IconButton>

              <IconButton color={"inherit"} size="large" onClick={openNewGroup}>
                <AddIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
