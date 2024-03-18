import React from 'react'
import { Dialog, Stack, TextField, DialogTitle, InputAdornment, ListItem, ListItemText, List } from "@mui/material"
import { Search as SearchIcon } from "@mui/icons-material"
import { useInputValidation } from "6pp";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/sample-data";
const users = [];

const Search = () => {

  const search = useInputValidation("")
  let isLoadingSendFriendRequest = false;
  const [users, setUsers] = React.useState(sampleUsers)

  const addFriendHandler = (id) => {
    console.log(`Add Friend Handler`, id);
  }
  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"} >
        <DialogTitle textAlign={"center"} >Find People</DialogTitle>
        <TextField label="" value={search.value} onChange={search.changeHandler} variant='outlined' size={"small"} InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }} />

        <List>
          {
            users.map(i => (
              <UserItem user={i} key={i._id} handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendRequest} />
            ))
          }
        </List>
      </Stack>
    </Dialog>
  )
}

export default Search
