"use client";
import { addUser } from "@/store/app/users";
import { Box, Button, Input, Typography } from "@mui/material";
import axios from "axios";
import { MuiFileInput } from "mui-file-input";
import { useState } from "react";
import { useDispatch } from "react-redux";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const dispatch = useDispatch()

  const handleChange = (newFile: any) => {
    setFile(newFile);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:3000/users", formData, {
      onUploadProgress: (progressEvent: any) => {
        const progress = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setUploadProgress(progress);
      },
    });
    dispatch(addUser(res.data));
    setFile(null);
  };

  return (
    <Box display="flex" alignItems="center" gap={5}>
      <Typography>Add User</Typography>
      <MuiFileInput
        value={file}
        onChange={handleChange}
        sx={{ width: "200px" }}
      />
      <Button
        variant="contained"
        sx={{ height: "55px" }}
        onClick={handleSubmit}
      >
        Add
      </Button>
    </Box>
  );
};

export default UploadFile;
