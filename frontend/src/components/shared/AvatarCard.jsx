import React from 'react'
import { AvatarGroup, Stack, Box, Avatar } from "@mui/material"
import { transformImage } from "../../lib/features.js";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup max={max}>
        <Box width={"5rem"} height={"3rem"}>
          {
            avatar?.map((i, index) => {
              return (
                <Avatar src={transformImage(i)} key={Math.random() * 100} alt={`Avatar ${Math.random() * 100}`} sx={{
                  width: "3rem",
                  height: "3rem",
                  position: "absolute",
                  left: {
                    xs: `${0.5 + index}rem`,
                    sm: `${index}rem`
                  }
                }} />
              )
            })
          }
        </Box>
      </AvatarGroup>
    </Stack>
  )
}

export default AvatarCard
