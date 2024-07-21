import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)(
  ({
    theme,
    type,
    contrastico,
    noborder,
    squared,
    small,
    maxWidth,
    smallPadding,
    primaryborder,
    greyBorder,
    customColor,
  }) => ({
    position: "relative",
    textTransform: "none",
    lineHeight: "24px",
    textAlign: "left",
    height: small ? "2rem" : "2.5rem",
    maxWidth: maxWidth ?? "unset",
    borderRadius: squared ? theme.shape.default : theme.shape.extraLarge,
    padding: smallPadding ? "12px" : "8px 24px 8px 24px",
    cursor: type === "disabled" ? "not-allowed" : "pointer",
    backgroundColor:
      type === "contrast"
        ? theme.components.button.backgroundColorContrast
        : type === "secondary"
        ? theme.components.button.backgroundColorSecondary
        : type === "white"
        ? theme.components.button.backgroundColorWhite
        : type === "danger"
        ? theme.components.button.backgroundColorDanger
        : type === "error"
        ? theme.components.button.backgroundColorDanger
        : type === "success"
        ? theme.components.button.backgroundColorSuccess
        : type === "disabled"
        ? theme.components.button.backgroundColorDisabled
        : type === "transparent"
        ? "transparent"
        : type === "warning"
        ? theme.components.button.backgroundColorErrorWarning
        : type === "successHighlight"
        ? "#3DA41E"
        : type === "activePrimary" || type === "lightGrey"
        ? theme.palette.black.lightest
        : type === "custom"
        ? customColor
        : theme.components.button.backgroundColor,
    color:
      type === "contrast"
        ? theme.components.button.colorContrast
        : type === "secondary"
        ? theme.components.button.colorSecondary
        : type === "danger"
        ? theme.components.button.colorDanger
        : type === "error"
        ? "#FFF"
        : type === "success"
        ? theme.components.button.colorSuccess
        : type === "disabled"
        ? theme.components.button.colorDisabled
        : theme.components.button.color,
    borderColor: primaryborder
      ? theme.palette.primary.main
      : noborder
      ? "transparent"
      : greyBorder
      ? theme.components.search.borderColor
      : type === "white"
      ? theme.components.button.borderColorContrast
      : type === "contrast"
      ? theme.components.button.borderColorContrast
      : type === "secondary"
      ? theme.components.button.borderColorSecondary
      : type === "transparent"
      ? "black"
      : undefined,
    fontSize: "14px",
    fontWeight: "400",
    whiteSpace: "nowrap",
    "& .css-16wpy1l": {
      // green notification circle on filters button
      display: "none",
    },
    "&:hover": {
      "&.MuiButton-root:hover": {
        borderColor:
          type === "activePrimary"
            ? theme.palette.primary.main
            : type === "lightGrey"
            ? "transparent"
            : type === "transparent"
            ? theme.components.button.borderColorContrast
            : "transparent",
        color:
          type === "white" || type === "contrast"
            ? theme.components.button.colorWhiteHover
            : type === "disabled"
            ? theme.components.button.colorDisabled
            : type === "transparent" || type === "lightGrey"
            ? "inherit"
            : theme.components.button.colorHover,
        backgroundColor:
          type === "white" || type === "contrast"
            ? theme.components.button.backgroundColorWhiteHover
            : type === "disabled"
            ? theme.components.button.backgroundColorDisabled
            : type === "activePrimary" || type === "lightGrey"
            ? theme.palette.black.lightest
            : type === "transparent" || type === "successHighlight"
            ? "unset"
            : theme.components.button.backgroundColorHover,
        "& .MuiIcon-root": {
          color:
            type === "white" || type === "contrast"
              ? theme.components.button.iconColorContrastHover
              : type === "disabled"
              ? theme.components.button.colorDisabled
              : theme.components.button.iconColorHover,
        },
        "& .css-16wpy1l": {
          display: "block", // green notification circle on filters button
        },
      },
      // "& .MuiButton-endIcon": {
      //   margin: small && "0px",
      // },
      "& .MuiIcon-root": {
        color: contrastico
          ? theme.components.button.iconColorContrast
          : theme.components.button.iconColor,
      },
      minWidth: "min-content",
      whiteSpace: "nowrap",
    },
  })
);

const StyledNotificationCircle = styled("div")(({ theme, type }) => ({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
  position: "absolute",
  top: "10px",
  right: "23px",
}));

export default function ActionButton({
  children,
  noborder,
  squared,
  small = true,
  maxWidth,
  type,
  primaryborder = false,
  greyBorder = false,
  customColor,
  ...props
}) {
  return (
    <StyledButton
      variant="outlined"
      noborder={noborder ? 1 : 0}
      squared={squared ? 1 : 0}
      small={small ? 1 : 0}
      maxWidth={maxWidth}
      primaryborder={primaryborder ? 1 : 0}
      greyBorder={greyBorder ? 1 : 0}
      customColor={customColor}
      type={type}
      {...props}>
      {children}
      {type === "activePrimary" ? (
        <StyledNotificationCircle></StyledNotificationCircle>
      ) : null}
    </StyledButton>
  );
}
