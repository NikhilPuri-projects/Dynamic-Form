import { styled } from "@mui/system";

const StyledContainer = styled("div")(
  ({
    theme,
    halfGap,
    noJustify,
    center,
    end,
    start,
    minGap,
    noGap,
    align,
    padding,
    relative,
    hoverColorRow,
    onboard,
  }) => ({
    display: "flex",
    gap: `${
      halfGap
        ? theme.space.main
        : minGap
        ? theme.space.half
        : noGap
        ? 0
        : theme.space.double
    }`,
    justifyContent: `${
      noJustify
        ? "initial"
        : center
        ? "center"
        : end
        ? "flex-end"
        : start
        ? "flex-start"
        : "space-between"
    }`,
    alignItems: `${
      align === "end" ? "end" : align === "start" ? "flex-start" : "center"
    }`,
    padding: `${padding ? `${theme.space.main} ${theme.space.half}` : "0"} `,
    position: `${relative ? "relative" : "initial"}`,

    "&:hover": {
      backgroundColor: hoverColorRow,
    },
    "@media (max-width: 768px)": {
      flexDirection: onboard ? "column" : "",
    },
  })
);

export default function RowContainer({ children, end, onboard, ...props }) {
  return (
    <StyledContainer onboard={onboard} end={end ? 1 : 0} {...props}>
      {children}
    </StyledContainer>
  );
}
