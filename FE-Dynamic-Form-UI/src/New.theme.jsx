import { createTheme } from "@mui/material/styles";

//#region palette
const palette = {
  primary: {
    main: "#00F8AB",
  },
  secondary: {
    main: "#233455",
  },
  white: {
    darkest: "#637381",
    darker: "#dad7d7",
    dark: "#f4f4f4",
    lighterDark: "#ebe9e9",
    main: "#FFFFFF",
  },
  black: {
    dark: "#010B13",
    main: "#262626",
    light: "#2F2F2F",
    lighter: "#585858",
    lightest: "#F3F6FB",
  },
  grey: {
    main: "#9E9E9E",
  },
  danger: {
    lighter: "#ffafae",
    light: "#ffd3d3",
    main: "#F04B61",
    light2: "#FECBCC",
  },
  warning: {
    main: "#FFC107",
    light: "rgba(255, 193, 7, 0.16)",
    veryLight: "#FFF5D7",
    dark: "#B78103",
  },
  success: {
    veryLight: "#DEF0D8",
    light: "rgba(84, 214, 44, 0.16)",
    main: "#54D62C",
    dark: "#329315",
  },
  blue: {
    main: "#0094FF",
    light: "#DAEDFF",
    dark: "#1890FF",
    darkest: "#1B3457",
    medium: "#6acdef",
  },
};
//#endregion

//#region shape
const shape = {
  default: 8,
  large: 16,
  extraLarge: 24,
};
//#endregion

//#region space
const space = {
  main: "1rem",
  half: "0.5rem",
  quarter: "0.25rem",
  double: "2rem",
  triple: "3rem",
  quadruple: "4rem",
};
//#endregion

//#region components
//#region MainLayout Default
const Topbar = {
  backgroundColor: palette.secondary.main,
};

const Leftbar = {
  backgroundColor: palette.white.dark,
  subItemBackgroundColor: palette.white.lighterDark,
  backgroundColorHover: palette.white.darker,
  backgroundColorActive: palette.primary.main,
  iconColor: palette.secondary.main,
  iconColorActive: palette.secondary.main,
  titleColor: palette.black.main,
  textColor: palette.white.darkest,
  textColorActive: palette.black.main,
};

const Maincontainer = {
  backgroundColor: palette.white.main,
};
//#endregion

//#region MainLayout Dark
const TopbarDark = {
  backgroundColor: palette.black.dark,
};

const LeftbarDark = {
  backgroundColor: palette.black.main,
  subItemBackgroundColor: palette.black.lighter,
  backgroundColorHover: palette.black.light,
  backgroundColorActive: palette.primary.main,
  iconColor: palette.white.main,
  iconColorActive: palette.black.main,
  titleColor: palette.white.main,
  textColor: palette.white.dark,
  textColorActive: palette.white.dark,
};

const MaincontainerDark = {
  backgroundColor: palette.black.light,
};
//#endregion

//#region Box
const Box = {
  backgroundColor: palette.white.main,
  bottomBackgroundColor: palette.secondary.main,
  color: palette.black.main,
};
//#endregion

//#region Box Dark
const BoxDark = {
  backgroundColor: palette.black.main,
  bottomBackgroundColor: palette.black.main,
  color: palette.white.main,
};
//#endregion

//#region Card
const Card = {
  backgroundColor: palette.white.main,
  errorColor: palette.danger.main,
  errorBgColor: palette.danger.light,
  successColor: palette.success.main,
  successBgColor: palette.success.light,
  warningColor: palette.warning.main,
  warningBgColor: palette.warning.light,
  greyBgColor: "#F3F6FB",
  greenBgColor: palette.success.veryLight,
  lightRedBorderColor: palette.danger.light2,
};
//#endregion

//#region Card Dark
const CardDark = {
  backgroundColor: palette.black.light,
  errorColor: palette.danger.main,
  errorBgColor: palette.danger.light,
  successColor: palette.success.main,
  successBgColor: palette.success.light,
  warningColor: palette.warning.main,
  warningBgColor: palette.warning.light,
  greyBgColor: palette.black.lighter,
};
//#endregion

//#region IconCard
const IconCard = {
  backgroundColor: palette.white.main,
  backgroundColorHover: palette.white.dark,
  fill: palette.black.dark,
};
//#endregion

//#region IconCard Dark
const IconCardDark = {
  backgroundColor: palette.black.main,
  backgroundColorHover: palette.black.lighter,
  fill: palette.white.main,
};
//#endregion

//#region Accordion
const Accordion = {
  backgroundColor: palette.white.main,
  color: palette.black.dark,
};
//#endregion

//#region Accordion Dark
const AccordionDark = {
  backgroundColor: palette.black.main,
  color: palette.white.main,
};
//#endregion

//#region TimeslotCard
const TimeslotCard = {
  backgroundColor: palette.white.dark,
  errorColor: palette.danger.main,
  errorBgColor: palette.danger.light,
  successColor: palette.success.main,
  successBgColor: palette.success.light,
  warningColor: palette.warning.main,
  warningBgColor: palette.warning.light,
};
//#endregion

//#region TimeslotCard Dark
const TimeslotCardDark = {
  backgroundColor: palette.black.light,
  errorColor: palette.danger.main,
  errorBgColor: palette.danger.light,
  successColor: palette.success.main,
  successBgColor: palette.success.light,
  warningColor: palette.warning.main,
  warningBgColor: palette.warning.light,
};
//#endregion

//#region ChipTabs Default
const ChipTabs = {
  backgroundColor: palette.white.dark,
  backgroundColorActive: palette.white.dark,
  borderColor: palette.white.darker,
  borderColorActive: palette.primary.main,
  textColor: palette.black.main,
  textSecondaryColor: palette.white.darkest,
  textColorActive: palette.black.main,
  iconColor: palette.secondary.main,
  iconColorActive: palette.secondary.main,
  success: palette.success.main,
  error: palette.danger.main,
  darkBlue: palette.blue.dark,
};
//#endregion

//#region ChipTabs Dark
const ChipTabsDark = {
  backgroundColor: palette.black.light,
  backgroundColorActive: palette.black.lighter,
  borderColor: palette.black.lighter,
  borderColorActive: palette.primary.main,
  textColor: palette.white.main,
  textSecondaryColor: palette.black.lighter,
  textColorActive: palette.white.main,
  iconColor: palette.white.main,
  iconColorActive: palette.white.main,
  success: palette.success.main,
  error: palette.danger.light,
};
//#endregion

//#region Title
const Title = {
  color: palette.black.main,
  greyColor: "#637381",
  blueColor: "#1890FF",
};
//#endregion

//#region Title Dark
const TitleDark = {
  color: palette.white.main,
  greyColor: "#637381",
  blueColor: "#1890FF",
};
//#endregion

//#region Paragraph
const Paragraph = {
  color: palette.black.main,
  colorContrast: palette.white.main,
};
//#endregion

//#region Paragraph Dark
const ParagraphDark = {
  color: palette.white.main,
  colorContrast: palette.black.main,
};
//#endregion

//#region Button
const Button = {
  backgroundColor: palette.primary.main,
  backgroundColorContrast: "#F3F6FB",
  backgroundColorSecondary: palette.secondary.main,
  backgroundColorWhite: palette.white.main,
  backgroundColorDanger: palette.danger.main,
  backgroundColorError: palette.error,
  backgroundColorSuccess: palette.success.light,
  backgroundColorErrorWarning: palette.warning.veryLight,
  backgroundColorDisabled: "#EDEDED",
  color: palette.secondary.main,
  colorContrast: palette.secondary.main,
  colorSecondary: palette.primary.main,
  colorDanger: palette.white.main,
  colorSuccess: palette.success.main,
  colorDisabled: "#9E9E9E",
  borderColorContrast: palette.secondary.main,
  borderColorSecondary: palette.primary.main,
  colorHover: palette.white.main,
  colorWhiteHover: palette.secondary.main,
  backgroundColorHover: palette.secondary.main,
  backgroundColorWhiteHover: palette.white.main,
  iconColor: palette.white.main,
  iconColorContrast: palette.secondary.main,
  iconColorHover: palette.secondary.main,
  iconColorContrastHover: palette.white.main,
};
//#endregion

//#region Button Dark
const ButtonDark = {
  backgroundColor: palette.primary.main,
  backgroundColorContrast: "transparent",
  backgroundColorSecondary: palette.secondary.main,
  backgroundColorWhite: palette.white.main,
  backgroundColorDanger: palette.danger.main,
  backgroundColorSuccess: palette.success.light,
  backgroundColorDisabled: "#EDEDED",
  color: palette.black.main,
  colorContrast: palette.white.main,
  colorSecondary: palette.primary.main,
  colorDanger: palette.white.main,
  colorSuccess: palette.success.main,
  colorDisabled: "#9E9E9E",
  borderColorContrast: palette.white.main,
  borderColorSecondary: palette.primary.main,
  colorHover: palette.white.main,
  colorWhiteHover: palette.secondary.main,
  backgroundColorHover: palette.black.dark,
  backgroundColorWhiteHover: palette.white.main,
  iconColor: palette.white.main,
  iconColorContrast: palette.secondary.main,
  iconColorHover: palette.secondary.main,
  iconColorContrastHover: palette.white.main,
};
//#endregion

//#region IconButton
const IconButton = {
  backgroundColor: palette.primary.main,
  fillDefaultColor: palette.secondary.main,
  fillErrorColor: palette.danger.main,

  fillLightErrorColor: palette.danger.light,
  fillSecondary: palette.secondary.main,
  fillContrast: palette.white.main,
  secondBackgroundColor: palette.white.dark,
  grey: palette.white.darkest,
  lightGrey: palette.black.lightest,
};
//#endregion

//#region IconButton Dark
const IconButtonDark = {
  backgroundColor: palette.primary.main,
  fillDefaultColor: palette.white.main,
  fillErrorColor: palette.danger.main,
  fillContrast: palette.white.main,
  secondBackgroundColor: palette.white.dark,
  fillHover: palette.black.dark,
  grey: palette.white.darkest,
};
//#endregion

//#region CardFilter
const CardFilter = {
  backgroundColor: palette.white.main,
  backgroundColorActive: "#F3F6FB",
  color: palette.black.main,
  borderColor: palette.white.darker,
  textSecondaryColor: palette.white.darker,
  borderColorActive: palette.primary.main,
  iconColor: palette.secondary.main,
  iconColorActive: palette.secondary.main,
};
//#endregion

//#region CardFilter Dark
const CardFilterDark = {
  backgroundColor: palette.black.light,
  backgroundColorActive: palette.black.main,
  borderColor: palette.white.main,
  textSecondaryColor: palette.white.darker,
  color: palette.white.main,
  borderColorActive: palette.primary.main,
  iconColor: palette.white.main,
  iconColorActive: palette.white.main,
};
//#endregion

//#region Search
const Search = {
  color: palette.black.dark,
  errorcolor: palette.danger.main,
  borderColor: palette.white.darker,
  greyColor: palette.white.dark,
  blueColor: "#1890FF",
  grey2Color: "#F3F6FB",
};
//#endregion

//#region Search Dark
const SearchDark = {
  color: palette.white.main,
  errorcolor: palette.danger.main,
  borderColor: palette.white.main,
  greyColor: palette.white.dark,
  blueColor: "#1890FF",
  grey2Color: "#F3F6FB",
};
//#endregion

//#region TextField
const TextField = {
  color: palette.black.dark,
  errorcolor: palette.danger.main,
  borderColor: palette.white.darker,
  readOnlyColor: palette.white.darker,
  backgroundColor: "#F7FAFC",
};
//#endregion

//#region TextField Dark
const TextFieldDark = {
  color: palette.white.main,
  errorcolor: palette.danger.main,
  borderColor: palette.white.main,
  readOnlyColor: palette.white.darkest,
};
//#endregion

//#region IconProvider
const IconProvider = {
  color: palette.secondary.main,
  colorPrimary: palette.primary.main,
  colorContrast: palette.white.main,
  black: palette.black.dark,
};
//#endregion

//#region IconProvider Dark
const IconProviderDark = {
  color: palette.white.main,
  colorPrimary: palette.primary.main,
  colorContrast: palette.white.main,
};
//#endregion

//#region Chip
const Chip = {
  color: palette.secondary.main,
  colorError: palette.danger.light,
  colorSuccess: palette.success.main,
  colorWarning: palette.warning.main,
  backgroundColor: palette.white.dark,
  backgroundColorError: palette.danger.main,
  backgroundColorSuccess: palette.success.light,
  backgroundColorWarning: palette.warning.light,
  deleteIconColor: palette.secondary.main,
  deleteLightIconColor: palette.white.darkest,
  deleteIconColorHover: palette.secondary.main,
  defaultColor: palette.blue.dark,
  defaultBackgroundColor: palette.blue.light,
  greyColor: palette.black.main,
  blueColor: "#1890FF",
  darkYellow: palette.warning.dark,
  darkGreen: palette.success.dark,

  greyBackgroundColor: palette.black.light,
};
//#endregion

//#region Chip Dark
const ChipDark = {
  color: palette.white.dark,
  colorError: palette.danger.light,
  colorSuccess: palette.success.main,
  colorWarning: palette.warning.main,
  backgroundColor: palette.black.lighter,
  backgroundColorError: palette.danger.main,
  backgroundColorSuccess: palette.success.light,
  backgroundColorWarning: palette.warning.light,
  deleteIconColor: palette.white.main,
  deleteIconColorHover: palette.white.dark,
  defaultColor: palette.blue.dark,
  defaultBackgroundColor: palette.blue.light,
  greyColor: palette.black.main,
  blueColor: "#1890FF",
  greyBackgroundColor: palette.black.light,
};
//#endregion

//#region ChipFilter
const ChipFilter = {
  borderColor: palette.black.light,
  backgroundColor: palette.white.main,
  textColor: palette.black.main,
};
//#endregion

//#region ChipFilter Dark
const ChipFilterDark = {
  borderColor: palette.black.main,
  backgroundColor: palette.black.light,
  textColor: palette.white.main,
};
//#endregion

//#region Dot
const Dot = {
  color: palette.black.main,
  colorPrimary: palette.primary.main,
  colorError: palette.danger.main,
  colorSuccess: palette.success.main,
  colorWarning: palette.warning.main,
  colorDefault: palette.white.dark,
  colorWhite: palette.white.main,
  border: palette.secondary.main,
};
//#endregion

//#region Dot Dark
const DotDark = {
  color: palette.white.dark,
  colorPrimary: palette.primary.main,
  colorError: palette.danger.main,
  colorSuccess: palette.success.main,
  colorWarning: palette.warning.main,
  colorDefault: palette.black.main,
};
//#endregion

//#region Autocomplete
const Autocomplete = {
  color: palette.secondary.main,
  backgroundColor: palette.white.main,
  readOnlyColor: palette.white.darker,
  focus: palette.primary.main,
};
//#endregion

//#region Autocomplete Dark
const AutocompleteDark = {
  color: palette.white.main,
  backgroundColor: palette.black.light,
  readOnlyColor: palette.white.darkest,
  focus: palette.primary.main,
};
//#endregion

//#region Tabs
const Tabs = {
  backgroundColor: palette.white.main,
  backgroundColorContrast: palette.white.dark,
  backgroundColorIndicator: palette.primary.main,
  color: palette.black.main,
  colorContrast: palette.black.main,
};
//#endregion

//#region Tabs Dark
const TabsDark = {
  backgroundColor: palette.black.main,
  backgroundColorContrast: palette.black.main,
  backgroundColorIndicator: palette.white.main,
  color: palette.white.main,
  colorContrast: palette.white.main,
};
//#endregion

//#region Select
const Select = {
  color: palette.black.dark,
  borderColor: palette.white.darker,
  colorContrast: palette.secondary.main,
  readOnlyColor: palette.white.darker,
};
//#endregion

//#region Select Dark
const SelectDark = {
  color: palette.primary.main,
  borderColor: palette.white.darker,
  colorContrast: palette.white.main,
  readOnlyColor: palette.white.darkest,
};
//#endregion

//#region Slider
const Slider = {
  background: palette.primary.main,
  color: palette.primary.main,
  errorColor: palette.danger.main,
  disabled: palette.white.darkest,
};
//#endregion

//#region Slider Dark
const SliderDark = {
  background: palette.white.main,
  color: palette.white.main,
  errorColor: palette.danger.main,
  disabled: palette.white.darkest,
};
//#endregion

//#region ButtonsGroup
const ButtonsGroup = {
  color: palette.white.main,
  backgroundColor: palette.secondary.main,
  borderColor: palette.secondary.main,
};
//#endregion

//#region ButtonsGroup Dark
const ButtonsGroupDark = {
  color: palette.black.main,
  backgroundColor: palette.white.main,
  borderColor: palette.secondary.main,
};
//#endregion

//#region Checkbox
const Checkbox = {
  color: palette.black.main,
  colorPrimary: palette.primary.main,
};
//#endregion

//#region Checkbox Dark
const CheckboxDark = {
  color: palette.white.main,
  colorPrimary: palette.primary.main,
};
//#endregion

//#region Stepper
const Stepper = {
  disabledBackgroundColor: palette.white.dark,
  completedBackgroundColor: palette.success.light,
  completedBorderColor: palette.success.main,
  activeBackgroundColor: palette.white.dark,
  activeBorderColor: palette.success.main,
  disabledColor: palette.black.main,
  activeColor: palette.white.main,
  errorColor: palette.danger.main,
  successColor: palette.success.main,
  lightSuccessColor: palette.success.veryLight,
  lightErrorColor: palette.danger.lighter,
  borderColor: palette.secondary.main,
  connectorColor: "#E0E0E0",
  completedConnectorColor: palette.primary.main,
  textColor: palette.grey.main,
  contrastColor: palette.white.main,
};
//#endregion

//#region Stepper Dark
const StepperDark = {
  disabledBackgroundColor: palette.white.darker,
  completedBackgroundColor: palette.success.main,
  completedBorderColor: palette.success.main,
  activeBackgroundColor: palette.white.darker,
  activeBorderColor: palette.success.main,
  disabledColor: palette.black.main,
  activeColor: palette.white.main,
  errorColor: palette.danger.main,
  successColor: palette.success.main,
  borderColor: palette.white.main,
  textColor: "#9E9E9E",
  completedConnectorColor: palette.primary.main,
  connectorColor: palette.white.main,
  contrastColor: palette.black.main,
};
//#endregion

//#region StepperV3
const StepperV3 = {
  disabledBackgroundColor: palette.white.dark,
  completedBackgroundColor: palette.success.main,
  completedBorderColor: palette.success.main,
  activeBackgroundColor: palette.white.main,
  // activeBackgroundColor: palette.white.dark,
  activeBorderColor: palette.success.main,
  disabledColor: palette.secondary.main,
  activeColor: palette.primary.main,
  errorColor: palette.danger.main,
  successColor: palette.success.main,
  borderColor: palette.secondary.main,
  connectorColor: "#E0E0E0",
  textColor: "#9E9E9E",
  contrastColor: palette.white.main,
};
//#endregion

//#region StepperV3 Dark
const StepperV3Dark = {
  disabledBackgroundColor: palette.white.darker,
  completedBackgroundColor: palette.white.darker,
  completedBorderColor: palette.success.main,
  activeBackgroundColor: palette.white.darker,
  activeBorderColor: palette.success.main,
  disabledColor: palette.black.main,
  activeColor: palette.white.main,
  errorColor: palette.danger.main,
  successColor: palette.success.main,
  borderColor: palette.white.main,
  textColor: "#9E9E9E",
  connectorColor: palette.white.main,
  contrastColor: palette.black.main,
};
//#endregion
//#region StepperWithCards
const StepperWithCards = {
  backgroundColorDisabled: "#EDEDED",
  disabledBackgroundColor: palette.white.dark,
  completedBackgroundColor: palette.success.light,
  completedBorderColor: palette.success.main,
  activeBackgroundColor: palette.white.main,
  activeBackgroundColor: palette.white.dark,
  activeBorderColor: palette.success.main,
  disabledColor: palette.secondary.main,
  activeColor: palette.primary.main,
  errorColor: palette.danger.main,
  lightSuccessColor: palette.success.veryLight,
  successColor: palette.success.main,
  borderColor: palette.secondary.main,
  connectorColor: "#E0E0E0",
  textColor: "#9E9E9E",
  contrastColor: palette.white.main,
};

//#region RouteStepper
const RouteStepper = {
  connector: palette.white.darker,
  backgroundColor: palette.white.main,
  borderColor: palette.white.darker,
};
//#endregion

//#region RouteStepper Dark
const RouteStepperDark = {
  connector: palette.white.darker,
  backgroundColor: palette.black.lighter,
  borderColor: palette.white.dark,
};
//#endregion

//#region RouteHorizontalStepper
const RouteHorizontalStepper = {
  disableColor: palette.white.darkest,
  connectorColorDisable: "#637381",
  colorActive: palette.black.main,
  lightConnector: palette.white.darker,
};
//#endregion

//#region RouteHorizontalStepper Dark
const RouteHorizontalStepperDark = {
  disableColor: palette.white.darkest,
  connectorColorDisable: "#637381",
  colorActive: palette.black.main,
  lightConnector: palette.white.darker,
};
//#endregion

//#region RouteVerticalStepper
const RouteVerticalStepper = {
  disableColor: palette.white.darkest,
  connectorColorDisable: palette.white.darker,
  colorActive: palette.primary.main,
  connectorColor: palette.primary.main,
};
//#endregion

//#region RouteVerticalStepper Dark
const RouteVerticalStepperDark = {
  disableColor: palette.white.darkest,
  connectorColorDisable: "#637381",
  colorActive: palette.primary.main,
  connectorColor: palette.primary.main,
};
//#endregion

//#region Status Icon
const StatusIcon = {
  errorColorSvg: palette.danger.main,
  errorColorIcon: palette.danger.light,
  successColorSvg: palette.success.main,
  successColorIcon: palette.success.light,
  warningColorSvg: palette.warning.main,
  warningColorIcon: palette.warning.light,
};
//#endregion

//#region Status Icon Dark
const StatusIconDark = {
  errorColorSvg: palette.danger.main,
  errorColorIcon: palette.danger.light,
  successColorSvg: palette.success.main,
  successColorIcon: palette.success.light,
  warningColorSvg: palette.warning.main,
  warningColorIcon: palette.warning.light,
};
//#endregion

//#region Table
const Table = {
  backgroundColor: palette.white.main,
  color: palette.black.main,
  headBackgroundColor: palette.white.dark,
};
//#endregion

//#region Table Dark
const TableDark = {
  backgroundColor: palette.black.main,
  color: palette.white.main,
  headBackgroundColor: palette.black.dark,
};
//#endregion

//#region DataTable
const DataTable = {
  backgroundColorOne: palette.white.main,
  backgroundColorTwo: "#F3F6FB",
  backgroundColorHover: "#DCE6F9",
};
//#endregion

//#region DataTable Dark
const DataTableDark = {
  backgroundColorOne: palette.white.main,
  backgroundColorTwo: "#F3F6FB",
  backgroundColorHover: "#DCE6F9",
};
//#endregion

//#region ProgressBar
const ProgressBar = {
  errorColor: palette.danger.main,
  successColor: palette.success.main,
  warningColor: palette.warning.bright,
};
//#endregion

//#region ProgressBar Dark
const ProgressBarDark = {
  errorColor: palette.danger.main,
  successColor: palette.success.main,
  warningColor: palette.warning.bright,
};
//#endregion

//#region StatusLabel
const StatusLabel = {
  errorColor: palette.danger.main,
  errorColorLight: palette.danger.light,
  successColor: palette.success.main,
  successColorLight: palette.success.light,
  warningColor: palette.warning.main,
  warningColorLight: palette.warning.bright,
  primaryColor: palette.primary.main,
  secondaryColor: palette.secondary.main,
  darkColor: palette.black.lighter,
  lightColor: palette.white.darker,
  whiteColor: palette.white.dark,
};
//#endregion

//#region StatusLabel Dark
const StatusLabelDark = {
  errorColor: palette.danger.main,
  errorColorLight: palette.danger.light,
  successColor: palette.success.main,
  successColorLight: palette.success.light,
  warningColor: palette.warning.main,
  warningColorLight: palette.warning.light,
  primaryColor: palette.primary.main,
  darkColor: palette.black.lighter,
  lightColor: palette.white.darker,
  whiteColor: palette.white.dark,
};
//#endregion

//#region ViewLoad
const ViewLoad = {
  errorColor: palette.danger.main,
  successColor: palette.primary.main,
  warningColor: palette.warning.bright,
  primaryColor: palette.primary.main,
  secondColor: palette.blue.medium,
};
//#endregion

//#region ViewLoad Dark
const ViewLoadDark = {
  errorColor: palette.danger.main,
  successColor: palette.primary.main,
  warningColor: palette.warning.bright,
  primaryColor: palette.primary.main,
};
//#endregion

//#region CardBottomBar
const CardBottomBar = {
  backgroundColor: "#233455",
  errorColor: palette.danger.main,
  whiteColor: palette.white.main,
};
//#endregion

//#region CardBottomBar Dark
const CardBottomBarDark = {
  backgroundColor: palette.black.dark,
  errorColor: palette.danger.main,
  whiteColor: palette.white.main,
};
//#endregion

//#region StatusCard
const StatusCard = {
  successColor: palette.success.main,
  errorColor: palette.danger.main,
};
//#endregion

//#region StatusCard Dark
const StatusCardDark = {
  successColor: palette.success.main,
  errorColor: palette.danger.main,
};
//#endregion

//#region LineChart
const LineChart = {
  firstColor: palette.primary.main,
  secondColor: palette.secondary.main,
  textColor: palette.black.main,
};
//#endregion

//#region LineChart Dark
const LineChartDark = {
  firstColor: palette.primary.main,
  secondColor: palette.white.dark,
  textColor: palette.white.main,
};
//#endregion

//#region Menuitem
const Menuitem = {
  textColor: palette.black.main,
};
//#endregion

//#region Menuitem Dark
const MenuitemDark = {
  textColor: palette.white.main,
};
//#endregion

const breakpoints = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 1024,
    xl: 1366,
    xxl: 1600,
  },
};

//#region build objects
const components = {
  layout: {
    main: {
      topbar: Topbar,
      leftbar: Leftbar,
      container: Maincontainer,
    },
  },
  box: Box,
  card: Card,
  chipTabs: ChipTabs,
  cardFilter: CardFilter,
  timeslotCard: TimeslotCard,
  title: Title,
  button: Button,
  iconButton: IconButton,
  IconCard: IconCard,
  iconProvider: IconProvider,
  chip: Chip,
  dot: Dot,
  paragraph: Paragraph,
  select: Select,
  search: Search,
  slider: Slider,
  statusIcon: StatusIcon,
  textfield: TextField,
  accordion: Accordion,
  autocomplete: Autocomplete,
  tabs: Tabs,
  table: Table,
  dataTable: DataTable,
  buttonsGroup: ButtonsGroup,
  stepper: Stepper,
  stepperv3: StepperV3,
  stepperWithCards: StepperWithCards,
  routeStepper: RouteStepper,
  routeHorizontalStepper: RouteHorizontalStepper,
  routeVerticalStepper: RouteVerticalStepper,
  checkbox: Checkbox,
  progressBar: ProgressBar,
  statusLabel: StatusLabel,
  viewLoad: ViewLoad,
  cardBottomBar: CardBottomBar,
  chipFilter: ChipFilter,
  statusCard: StatusCard,
  lineChart: LineChart,
  menuitem: Menuitem,
};

const componentsDark = {
  layout: {
    main: {
      topbar: TopbarDark,
      leftbar: LeftbarDark,
      container: MaincontainerDark,
    },
  },
  box: BoxDark,
  card: CardDark,
  chipTabs: ChipTabsDark,
  cardFilter: CardFilterDark,
  timeslotCard: TimeslotCardDark,
  title: TitleDark,
  button: ButtonDark,
  iconProvider: IconProviderDark,
  IconCard: IconCardDark,
  iconButton: IconButtonDark,
  chip: ChipDark,
  dot: DotDark,
  paragraph: ParagraphDark,
  select: SelectDark,
  search: SearchDark,
  slider: SliderDark,
  statusIcon: StatusIconDark,
  textfield: TextFieldDark,
  accordion: AccordionDark,
  autocomplete: AutocompleteDark,
  tabs: TabsDark,
  table: TableDark,
  dataTable: DataTableDark,
  buttonsGroup: ButtonsGroupDark,
  stepper: StepperDark,
  stepperv3: StepperV3Dark,
  routeStepper: RouteStepperDark,
  routeHorizontalStepper: RouteHorizontalStepperDark,
  routeVerticalStepper: RouteVerticalStepperDark,
  checkbox: CheckboxDark,
  progressBar: ProgressBarDark,
  statusLabel: StatusLabelDark,
  viewLoad: ViewLoadDark,
  cardBottomBar: CardBottomBarDark,
  chipFilter: ChipFilterDark,
  statusCard: StatusCardDark,
  lineChart: LineChartDark,
  menuitem: MenuitemDark,
};
//#endregion
//#endregion

export const theme = createTheme({
  components: components,
  palette: palette,
  shape: shape,
  space: space,
  breakpoints: breakpoints,
});

export const themeDark = createTheme({
  components: componentsDark,
  palette: palette,
  shape: shape,
  space: space,
});
