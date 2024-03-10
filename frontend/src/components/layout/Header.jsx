import React, { useState, lazy, Suspense } from 'react'
import { Box, AppBar, Toolbar, Typography, IconButton, Tooltip, Backdrop } from "@mui/material"
import { orange } from "../../constants/color.js"
import { Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationsIcon } from "@mui/icons-material"
import { useNavigate } from 'react-router-dom'

const SearchDialog = lazy(() => import("../specific/Search"))
const NotificationDialog = lazy(() => import("../specific/Notifications"))
const NewGroupDialog = lazy(() => import("../specific/NewGroup"))

const Header = () => {

  const navigate = useNavigate();

  const [ismobile, setIsMobile] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [isNewGroup, setIsNewGroup] = useState(false)
  const [isNotification, setIsNotification] = useState(false)

  const handleMobile = () => {
    console.log("Mobile")
    setIsMobile(prev => !prev)
  }

  const openSearchDialog = () => {
    console.log("Open Search")
    setIsSearch(prev => !prev)
  }

  const openNewGroup = () => {
    console.log("Open New Group")
    setIsNewGroup(prev => !prev)
  }

  const openNotification = () => {
    console.log("Open Notification")
    setIsNotification(prev => !prev)
  }

  const logoutHandler = () => {
    console.log("Logout")
  }

  const navigateToGroup = () => navigate("/groups")

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
              <IconBtn title="Search" onClick={openSearchDialog} icon={<SearchIcon />} />
              <IconBtn title="New Group" onClick={openNewGroup} icon={<AddIcon />} />
              <IconBtn title="Manage Group" onClick={navigateToGroup} icon={<GroupIcon />} />
              <IconBtn title="Notification" onClick={openNotification} icon={<NotificationsIcon />} />
              <IconBtn title="Logout" onClick={logoutHandler} icon={<LogoutIcon />} />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {
        isSearch && <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      }

      {
        isNotification && <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      }
      {
        isNewGroup && <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      }
    </>
  )
}

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color={"inherit"} size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default Header
