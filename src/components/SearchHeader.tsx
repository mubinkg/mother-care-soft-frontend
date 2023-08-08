import { Box, Button, TableCell } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useSearchUser } from '@/hooks/useSearchUser';

interface IProps{
    header: string
}

const SearchHeader = ({header}:IProps) => {
    const getUsers = useSearchUser()
    const [isSearch, setSearch] = useState(false)
    const [value, setValue] = useState("");

    function onChangeHandler(e:any){
        setValue(e.target.value);
        const query:Record<string, any> = {};
        query[header] = e.target.value;
        getUsers(query)
    }

  return (
    <TableCell key={header}>
        <Box display="flex" alignItems="center" gap={2}>
            <p>{header}</p>
            {!isSearch ? <div onClick={()=>setSearch((pre)=>!pre)}><SearchIcon/></div>:(<><input style={{width: "100px"}} value={value} onChange={onChangeHandler} type='text' name={header}/> <Button sx={{color:"red"}} onClick={()=>{setSearch(pre=>!pre); setValue("")}}>Close</Button></>)}
        </Box>
    </TableCell>
  )
}

export default SearchHeader