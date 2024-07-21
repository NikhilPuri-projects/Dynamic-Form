import { styled } from "@mui/system";

const StyledTitle = styled("div")(
  ({
    theme,
    type,
    bold,
    uppercase,
    capitalize,
    center,
    end,
    grey,
    blue,
    customColor,
    link,
    underlined,
    dotted,
  }) => ({
    color: grey
      ? theme.components.title.greyColor
      : blue || link
      ? theme.components.title.blueColor
      : customColor
      ? customColor
      : theme.components.title.color,
    fontSize:
      type === "title"
        ? 32
        : type === "h1"
        ? 28
        : type === "h2"
        ? 24
        : type === "h3"
        ? 20
        : type === "h4"
        ? 16
        : type === "h5"
        ? 14
        : type === "h6"
        ? 12
        : 14,

    lineHeight:
      type === "title"
        ? "40px"
        : type === "h1"
        ? "36px"
        : type === "h2"
        ? "32px"
        : type === "h3"
        ? "28px"
        : type === "h4"
        ? "24px"
        : type === "h5"
        ? "20px"
        : type === "h6"
        ? "16px"
        : "22px",

    fontWeight: bold || link ? "bold" : "normal",
    textTransform: capitalize ? "capitalize" : uppercase ? "uppercase" : "none",
    textAlign: center ? "center" : end ? "right" : "left",
    textDecoration: link || underlined ? "underline" : "none",
    textDecorationStyle: dotted ? "dotted" : "none",
    cursor: link ? "pointer" : "default",
  })
);

export default function Title({
  children,
  bold,
  uppercase,
  capitalize,
  center,
  end,
  grey,
  blue,
  link,
  reference,
  dotted,
  ...props
}) {
  return (
    <StyledTitle
      bold={bold ? 1 : 0}
      uppercase={uppercase ? 1 : 0}
      center={center ? 1 : 0}
      end={end ? 1 : 0}
      capitalize={capitalize ? 1 : 0}
      grey={grey ? 1 : 0}
      ref={reference}
      blue={blue ? 1 : 0}
      link={link ? 1 : 0}
      dotted={dotted ? 1 : 0}
      {...props}>
      {children}
    </StyledTitle>
  );
}
