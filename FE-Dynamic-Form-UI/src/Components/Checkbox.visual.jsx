import MuiCheckbox from "@mui/material/Checkbox";
import { styled } from "@mui/material";

const StyledCheckbox = styled(MuiCheckbox)(({ theme, color }) => ({
  "&.Mui-checked": {
    color:
      color === "primary"
        ? theme.components.checkbox.colorPrimary
        : theme.components.checkbox.color,
  },
  "&.MuiCheckbox-root:hover": {
    backgroundColor: "transparent",
  },
}));

export default function Checkbox({ size = "small", ...props }) {
  return <StyledCheckbox {...props} size={size} />;
}
