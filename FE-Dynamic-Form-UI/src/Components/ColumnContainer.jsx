import * as React from "react";
import { styled } from "@mui/system";

const Container = styled("div")(
  ({
    theme,
    halfGap,
    halfBottom,
    noBottom,
    topped,
    nowidth,
    fullHeight,
    alignItems,
    alignSelf,
    justifyContent,
    doubleGap,
    noGap,
    minGap,
    width,
    centered,
    small,
  }) => ({
    display: "flex",
    flexFlow: "column",
    marginTop: `${topped ? theme.space.main : 0}`,
    width: `${small ? "70%" : nowidth ? "auto" : width ? width : "100%"}`,
    height: `${fullHeight ? "100%" : "auto"}`,
    marginBottom: `${
      halfBottom ? theme.space.half : noBottom ? 0 : theme.space.double
    }`,
    gap: `${
      halfGap
        ? theme.space.main
        : doubleGap
        ? theme.space.quadruple
        : noGap
        ? "0"
        : minGap
        ? theme.space.quarter
        : theme.space.double
    }`,
    alignItems: `${alignItems ? alignItems : "auto"}`,
    alignSelf: `${alignSelf ? alignSelf : "auto"}`,
    justifyContent: `${justifyContent ? justifyContent : "auto"}`,
    margin: `${small ? "0 auto" : centered ? "auto" : "0"}`,
  })
);

const ColumnContainer = React.forwardRef(
  ({ children, small, nowidth, topped, ...props }, ref) => {
    return (
      <Container
        {...props}
        ref={ref}
        small={small ? 1 : 0}
        nowidth={nowidth ? 1 : 0}
        topped={topped ? 1 : 0}>
        {children}
      </Container>
    );
  }
);

export default ColumnContainer;
