import React from 'react'
import { Stack } from "@mui/material"
import ChatItem from "../shared/ChatItem"

const ChatList = ({ w = "100%", chats = [], chatId, onlineUsers = [], newMessagesAlert = [{
  chatId: "",
  count: 0,
}], handleDeleteChat }) => {
  return (
    <Stack width={w} direction={"column"} >
      {
        chats?.map((data, index) => {
          const { _id, name, groupChat, avatar, members } = data;

          const newMessageAlert = newMessagesAlert.find(({ alert }) => chatId === _id)

          const isOnline = members?.some((member) => onlineUsers.includes(_id))
          return (
            <ChatItem newMessageAlert={newMessageAlert} isOnline={isOnline} avatar={avatar} name={name} _id={_id} key={_id} groupChat={groupChat} sameSender={chatId === _id} handleDeleteChatOpen={handleDeleteChat} />
          )
        })
      }
    </Stack>
  )
}

export default ChatList
