import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Stack, IconButton } from '@mui/material'
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponents';
import { grayColor, orange } from '../constants/color';
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessage } from '../constants/sample-data';
import MessageComponent from '../components/shared/MessageComponent';

const user = {
  _id: "sskjfekjbajdbjhabdhj",
  name: "abhishek"
}

const Chat = () => {

  const containerRef = useRef(null);
  return (
    <>
      <Stack ref={containerRef} boxSizing={"border-box"} bgcolor={grayColor} height={"90%"} sx={{ overflowX: "hidden", overFlowY: "auto" }} padding={"1rem"} spacing={"1rem"}>

        {
          sampleMessage?.map(i => <MessageComponent key={i._id} message={i} user={user} />)
        }
      </Stack>
      <form style={{ height: "10%" }}>
        <Stack direction={"row"} height={"100%"} alignItems={"center"} position={"relative"} padding={"1rem"}>
          <IconButton sx={{
            position: "absolute",
            left: "1.5rem",
            rotate: "30deg",
          }}>
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder='Type Message Here...' />

          <IconButton type="submit" sx={{
            rotate: "-30deg",
            backgroundColor: orange,
            color: "white",
            margingLeft: "1rem",
            padding: "0.5rem",
            "&:hover": {
              bgcolor: "error.dark"
            }
          }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>


      <FileMenu />
    </>
  )
}

export default AppLayout()(Chat)
