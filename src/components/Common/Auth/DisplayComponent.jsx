import { Typography } from "@material-ui/core";
import { Button, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";

const genders = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Others",
    label: "Others",
  },
];
const types = [
  {
    value: "Applicant",
    label: "Applicant",
  },
  {
    value: "Company",
    label: "Company",
  },
];
const sectors = [
  {
    value: "Information Technology",
    label: "Information Technology",
  },
  {
    value: "Health",
    label: "Health",
  },
  {
    value: "Entertainment",
    label: "Entertainment",
  },
  {
    value: "Real Estate",
    label: "Real Estate",
  },
];
export const renderText = ({ label, color, align, variant }) => {
  return (
    <Typography
      color={color ? color : "primary"}
      align={align ? align : "center"}
      variant={variant ? variant : "h6"}
    >
      {label}
    </Typography>
  );
};

export const renderInputText = ({
  label,
  name,
  color,
  state,
  handleOnChange,
}) => {
  const { data, errors } = state;
  return (
    <TextField
      label={label}
      // color={color ? color : "primary"}
      variant="outlined"
      fullWidth={true}
      size="small"
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name]}
      onChange={handleOnChange}
    />
  );
};
export const renderSelect = ({ label, name, color, state, handleOnChange }) => {
  const { data, errors } = state;
  return (
    <TextField
      id="standard-select-gender"
      select
      name={name}
      label={label}
      value={data[name]}
      onChange={handleOnChange}
      helperText={errors[name]}
      variant="outlined"
      // color={color ? color : "primary"}
      error={errors[name] ? true : false}
      style={{ width: "100%" }}
    >
      {genders.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
export const renderSelectType = ({
  label,
  name,
  color,
  state,
  handleOnChange,
}) => {
  const { data, errors } = state;
  return (
    <TextField
      id="outlined-select-type"
      select
      label={label}
      name={name}
      value={data[name]}
      onChange={handleOnChange}
      helperText={errors[name]}
      variant="outlined"
      color={color ? color : "primary"}
      error={errors[name] ? true : false}
      style={{ width: "100%" }}
    >
      {types.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
export const renderSelectSector = ({
  label,
  name,
  color,
  state,
  handleOnChange,
}) => {
  const { data, errors } = state;
  return (
    <TextField
      id="outlined-select-type"
      select
      label={label}
      name={name}
      value={data[name]}
      onChange={handleOnChange}
      helperText={errors[name]}
      variant="outlined"
      color={color ? color : "primary"}
      error={errors[name] ? true : false}
      style={{ width: "100%" }}
    >
      {sectors.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export const renderButton = ({ label, variant, handleNext, color }) => {
  return (
    <Button
      variant={variant}
      onClick={handleNext}
      color={color ? color : "primary"}
    >
      {label}
    </Button>
  );
};
