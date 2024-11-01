import { TextField } from "@mui/material";

const InputForm = (props: any) => {
  const {
    label,
    mask,
    value,
    name,
    type,
    onChange,
    tamanhoMax,
    isInvalid,
    disabled = false,
    msgError,
  } = props;

  return (
    <TextField
      label={label}
      fullWidth
      type={type ?? "text"}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "black", 
          },
          "&:hover fieldset": {
            borderColor: "black", 
          },
          "&.Mui-focused fieldset": {
            borderColor: "black", 
          },
          "& input": {
            color: "black", 
          },
        },
        "& .MuiInputLabel-root": {
          color: "black", 
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "black", 
        },
      }}
      value={value}
      name={name}
      onChange={onChange}
      error={isInvalid}
      helperText={msgError}
      disabled={disabled}
      InputProps={{
        inputProps: { mask: mask, maxLength: tamanhoMax ?? 240 },
      }}
    />
  );
};

export default InputForm;
