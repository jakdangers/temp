import * as React from "react";
import {useAxiosGet} from "../../axios/useAxiosGet";
import {axiosInstance} from "../../axios/axios";
import {Box, TextField} from "@mui/material";

interface samplePrams {
  test: string;
}

export default function Home() {

  const [sample, setSample] = React.useState<samplePrams>({ test: '' } as samplePrams);
  const [sendRequest, data, isLoading, error] = useAxiosGet(axiosInstance, '/sample', sample);

  return (
    <Box>
      <TextField
        id="outlined-controlled"
        label="Controlled"
        value={sample.test}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSample(prev => {
            return {
              ...prev,
              test: event.target.value
            }
          });
        }}
      />
      <button onClick={sendRequest}>send</button>
    </Box>
  )
}
