import React, { memo } from 'react'
import { Avatar, IconButton, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material"

const UserItem = ({ user, handler, handleIsLoading, isAdded = false }) => {

  const { name, _id, avatar } = user;

  return (
    <ListItem>
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} width={"100%"}>
        <Avatar src={avatar} alt={`Avatar ${Math.random() * 100}`} sx={{ width: 32, height: 32 }} />
        <Typography variant={"body1"} sx={{
          flexGrow: 1,
          display: "-webkit-flex",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: "100%"
        }}>
          {name}
        </Typography>

        <IconButton size='small' sx={{
          bgcolor: isAdded ? "error.main" : "primary.main",
          color: "white",
          "&:hover": {
            bgcolor: isAdded ? "error.dark" : "primary:dark"
          }
        }} onClick={() => handler(_id)} disabled={handleIsLoading}>
          {
            isAdded ? <RemoveIcon /> : <AddIcon />
          }
        </IconButton>
        {/* <ListItemText primary={name} secondary={_id} /> */}
      </Stack>
    </ListItem>
  )
}

export default memo(UserItem)
