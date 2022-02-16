import TextField from "@mui/material/TextField";

const TextBox = () => {
  return (
    <>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </>
  );
};

export default TextBox;
