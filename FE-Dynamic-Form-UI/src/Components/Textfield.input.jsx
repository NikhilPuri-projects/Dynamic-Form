import MuiTextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(MuiTextField)(
  ({
    theme,
    type,
    readOnly,
    squared,
    isanchortag,
    width,
    primaryFocusColor,
  }) => ({
    // OVERRIDE DISABLED COLORS
    "& .MuiInputBase-input.Mui-disabled": {
      WebkitTextFillColor: "inherit",
    },
    "& .MuiInputLabel-root.Mui-disabled": {
      color: "inherit",
    },
    '& input:-webkit-autofill, &input:-webkit-autofill:focus': {
      transition: 'background-color 5000s 0s',
    },
    // END OVERRIDE DISABLED COLORS
    "input[type='date']::-webkit-calendar-picker-indicator": {},
    "& .MuiOutlinedInput-root": {
      borderRadius: squared ? 8 : "1000px",
      fontWeight: 500,
      width: width || "inherit",
      whiteSpace: "nowrap",
      overFlow: "scroll",

      "& fieldset": {
        borderColor:
          type === "error"
            ? theme.components.textfield.errorcolor
            : theme.components.textfield.borderColor,
      },

      "&:hover fieldset": {
        borderColor:
          type === "error"
            ? theme.components.textfield.errorcolor
            : theme.components.textfield.color,
      },

      "&.Mui-focused fieldset": {
        borderColor:
          type === "error"
            ? theme.components.textfield.errorcolor
            : primaryFocusColor
            ? theme.components.autocomplete.focus
            : theme.components.textfield.color,
      },

      ...(readOnly && {
        "& fieldset": {
          borderColor: theme.components.textfield.readOnlyColor,
        },
        "& input": {
          color: theme.components.textfield.readOnlyColor,

          cursor: "not-allowed",
        },
      }),
    },

    "& .MuiOutlinedInput-input": {
      color:
        isanchortag == "true"
          ? theme.components.textfield.anchorLinkColor
          : theme.components.textfield.color,
    },

    "& .MuiOutlinedInput-input:focus": {
      color:
        isanchortag == "true"
          ? theme.components.textfield.anchorLinkColor
          : theme.components.textfield.color,
    },
    "& label": {
      color: theme.components.textfield.color,
      fontWeight: 500,
      fontSize: 14,
    },

    "& label.Mui-focused": {
      color: theme.components.textfield.color,
      fontWeight: 500,
    },

    "& .MuiIcon-root": {
      fontSize: 22,
    },
  })
);

export default function Textfield({
  type = "default",
  size = "small",
  isanchortag = "false",
  width,
  readOnly = false,
  squared = false,
  primaryFocusColor = false,
  ...props
}) {
  return (
    <StyledTextField
      {...props}
      type={type}
      size={size}
      ref={props.ref || null}
      readOnly={readOnly ? 1 : 0}
      width={width}
      squared={squared ? 1 : 0}
      variant="outlined"
      autoComplete="off"
      primaryFocusColor={primaryFocusColor ? 1 : 0}
    />
  );
}
