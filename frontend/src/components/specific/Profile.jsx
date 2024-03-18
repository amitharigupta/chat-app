import React from 'react'
import { Stack, Avatar, Typography, } from "@mui/material"
import { Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalendarIcon, Face } from "@mui/icons-material"
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"} >
      <Avatar sx={{ width: 200, height: 200, objectFit: "contain", marginBottom: "1rem", border: "5px solid white" }} />
      <ProfileCard heading={"Bio"} text={"Hello Charlie"} />
      <ProfileCard heading={"Username"} text={"Amitgt9967"} Icon={<UserNameIcon />} />
      <ProfileCard heading={"Name"} text={"Amit Gupta"} Icon={<FaceIcon />} />
      <ProfileCard heading={"Joined"} text={moment('1996-03-21').format('DD-MM-YYYY')} Icon={<FaceIcon />} />
    </Stack>
  )
}

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack direction={"row"} spacing={"1rem"} alignItems={"center"} color={"white"} textAlign={"center"}>
    {
      Icon && Icon
    }

    <Stack>
      <Typography variant={"body1"}>{text}</Typography>
      <Typography color={"gray"} variant={"caption"}>{heading}</Typography>
    </Stack>
  </Stack>
)

export default Profile
