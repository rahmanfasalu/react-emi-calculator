import { DefaultTheme } from "styled-components";
const colors = {
  bg: "#000000",
  primary: "#18303F",
  white: "#fff",
  secondary: "#92A0A9",
  active: "#fcba03",
  gray: "#545454",
  blue: "#03A9F1",
  green: "#00AC83",
  red: "#e22323",
};

const background = {
  footerbg: "#FFF",
};

const transitions = {
  normal: "0.5s",
};

const fontSize = {
  big: "6.4rem",
  span: "0.9rem",
  paragraph: "1.4rem",
  small: "1rem",
  ipadHeading: "4.4rem",
  semiHeading: "1.6rem",
  icon: "2rem",
};

const lineHeight = {
  big: "6.4rem",
  steps: "4.6rem",
  semiHeading: "2.0rem",
};

const font = {
  heading: "Tahoma",
  paragraph: "Open Sans",
  primary: '"Titillium Web"',
};

const Theme: DefaultTheme = {
  colors,
  fontSize,
  transitions,
  font,
  lineHeight,
  background,
};

export default Theme;
