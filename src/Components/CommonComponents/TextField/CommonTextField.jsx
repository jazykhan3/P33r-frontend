import { useState } from "react";
import TextField from "@mui/material/TextField";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@mui/material/InputAdornment";
import Image from 'next/image';

// import showPasswordIcon from "../../../Assets/show-password.svg";
// import hidePasswordIcon from "../../../Assets/hide-password.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      backgroundColor: "#F9F9F9",
    },
    "& .MuiFilledInput-root:hover": {
      backgroundColor: "#F9F9F9",
      "@media (hover: none)": {
        backgroundColor: "#F9F9F9",
      },
    },
    "& .MuiFilledInput-root.Mui-focused": {
      backgroundColor: "#F9F9F9",
    },
  },
}));

function CommonTextField({
  validate,
  value,
  id,
  label,
  type,
  autoComplete,
  handleFieldValueChange,
  setShowPassword,
  showPassword,
  fieldType = "other",
  startAdornment,
  extraClasses = "",
}) {
  const classes = useStyles();
  const [focused, setFocused] = useState(false);

  return (
    <>
      <TextField
        id={id}
        label={label}
        type={type}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          border:
            !validate && value
              ? "solid 1px #BD2D19"
              : validate && value && focused
              ? "solid 1px #C75D9C"
              : "1px solid #CCC",
        }}
        autoComplete={autoComplete}
        variant="filled"
        className={`customTextField ${classes.root} rounded-[12px] ${
          fieldType === "otp" ? "otpFieldType" : ""
        } ${extraClasses}`}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              {fieldType === "password" && (
                <img
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                  src={showPassword ? "/show-password.svg" : "/hide-password.svg"}
                  alt="_showPassord"
                />
              )}
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position="start">
              {fieldType === "search" && (
                 <img   src={startAdornment} alt="adornment" />
              )}
            </InputAdornment>
          ),
        }}
        inputProps={{ maxLength: fieldType === "otp" ? 1 : "" }}
        InputLabelProps={{
          sx: {
            // set the color of the label when not shrinked
            color: "#747073",
            [`&.${inputLabelClasses.shrink}`]: {
              // set the color of the label when shrinked (usually when the TextField is focused)
              color: "#747073",
            },
          },
        }}
        onChange={handleFieldValueChange}
      />
    </>
  );
}
export default CommonTextField;
