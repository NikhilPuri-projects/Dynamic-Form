import MuiAutocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import Textfield from "./Textfield.input";
import React from "react";

const StyledAutocomplete = styled(MuiAutocomplete)(
  ({ theme, readOnly, lightBorder = true, customEndAdornment, width }) => ({
    width: width ?? "unset",
    minWidth: "150px",
    "& .MuiOutlinedInput-root": {
      paddingRight: customEndAdornment ? "5px !important" : null,
    },
    "& .MuiSvgIcon-root": {
      fill: theme.components.autocomplete.color,
    },
    "& .MuiInputLabel-root": {
      color: theme.components.autocomplete.color,
      "& .Mui-focused": {
        color: theme.components.autocomplete.color,
      },
    },
    "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
      color: theme.components.autocomplete.color,
    },
    "& .MuiAutocomplete-inputRoot": {
      color: readOnly
        ? theme.components.autocomplete.readOnlyColor
        : theme.components.autocomplete.color,
      '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type':
        {
          color: readOnly
            ? theme.components.autocomplete.readOnlyColor
            : theme.components.autocomplete.color,
        },

      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: readOnly
          ? theme.components.autocomplete.readOnlyColor
          : lightBorder
          ? theme.components.textfield.borderColor
          : theme.components.autocomplete.color,
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: readOnly
          ? theme.components.autocomplete.readOnlyColor
          : theme.components.autocomplete.color,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: readOnly
          ? theme.components.autocomplete.readOnlyColor
          : theme.components.autocomplete.color,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.components.autocomplete.focus,
      },
    },
    ...(readOnly && {
      '& .MuiAutocomplete-inputRoot[class*="MuiInputBase-root"] .MuiAutocomplete-input':
        {
          cursor: "not-allowed",
        },
      "& .MuiAutocomplete-clearIndicator": {
        display: "none",
      },
    }),
  })
);

const CustomItemBox = styled("ul")(({ theme, noBackground }) => ({
  backgroundColor: theme.components.autocomplete.backgroundColor,
  color: theme.components.autocomplete.color,
  borderRadius: "16px",
}));

export default function Autocomplete({
  options = [],
  label = "",
  size = "small",
  placeholder = "",
  multiple = false,
  primaryFocusColor,
  readOnly = false,
  width,
  disable=false,
  //InputProps,
  ...props
}) {
  return (
    <StyledAutocomplete
      disabled={disable}
      width={width}
      options={options}
      autoHighlight
      multiple={multiple}
      ListboxComponent={CustomItemBox}
      readOnly={readOnly}
      customEndAdornment={props.customEndAdornment}
      {...props}
      renderInput={(params) => (
        <Textfield
          {...params}
          label={label}
          size={size}
          placeholder={placeholder}
          primaryFocusColor={primaryFocusColor}

          // InputProps={InputProps}
        />
      )}
      {...props}
    />
  );
}
