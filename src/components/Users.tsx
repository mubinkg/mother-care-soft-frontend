"use client"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useFetchUser } from '@/hooks/fetchUser';
import { useDeleteUser } from '@/hooks/useDeleteUser';
import SearchHeader from './SearchHeader';


export default function Users() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const headers = useSelector((store:RootState)=>store.users.headers);
  const users = useSelector((store:RootState)=>store.users.users);
  const getUserList = useFetchUser();
  const deleteUser = useDeleteUser()

  React.useEffect(()=>{
    getUserList()
  }, [])

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' , marginTop: "20px"}}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                {headers.map(header=>(
                    <SearchHeader header={header} key={header}/>
                ))}
                <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
                users.map((user:any)=>(
                    <TableRow key={user.email}>
                        {
                            headers.map((key)=>(
                                <TableCell key={key}>{user[key]}</TableCell>
                            ))
                        }
                        <TableCell>
                            <Button variant="contained" onClick={()=>deleteUser(user.id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={10}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
