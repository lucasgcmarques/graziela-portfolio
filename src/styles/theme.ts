/**
 * Theme Configuration
 * Central file for all design tokens and theme values
 */

export const colors = {
  // Primary Cyan/RGB palette (accent)
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
  },

  // Magenta/Pink RGB palette (secondary accent)
  magenta: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
  },

  // Neutral Black/Gray palette
  black: {
    50: "#f7f7f7",
    100: "#e3e3e3",
    200: "#c8c8c8",
    300: "#a4a4a4",
    400: "#818181",
    500: "#666666",
    600: "#515151",
    700: "#434343",
    800: "#383838",
    900: "#121212",
    950: "#0a0a0a",
  },

  // Base colors
  dark: "#0a0a0a",
  darkAlt: "#121212",
} as const;

// Semantic color mappings
export const semanticColors = {
  // Backgrounds
  background: {
    primary: colors.dark,
    secondary: colors.darkAlt,
    tertiary: colors.black[800],
    gradient: {
      start: colors.dark,
      middle: colors.darkAlt,
      end: colors.black[800],
    },
  },

  // Text colors
  text: {
    primary: colors.black[50], // Main text (light on dark)
    secondary: colors.black[200], // Subtitles, navigation
    muted: colors.black[300], // Descriptions, captions
    light: colors.black[400], // Placeholder, disabled
  },

  // Accent colors
  accent: {
    primary: colors.cyan[400], // Main accent (buttons, links)
    hover: colors.cyan[300], // Hover state
    active: colors.cyan[500], // Active/pressed state
    muted: colors.cyan[600], // Subtle accent
    light: colors.cyan[900], // Background accent
  },

  // Secondary accent
  secondary: {
    primary: colors.magenta[400],
    hover: colors.magenta[300],
    active: colors.magenta[500],
  },

  // Border colors
  border: {
    light: colors.black[700],
    default: colors.black[600],
    dark: colors.black[500],
  },

  // Shadow colors
  shadow: {
    cyan: "rgba(34, 211, 238, 0.25)",
    magenta: "rgba(232, 121, 249, 0.25)",
    dark: "rgba(0, 0, 0, 0.5)",
  },
} as const;

// Typography
export const typography = {
  fonts: {
    serif: "'Cormorant Garamond', Georgia, serif",
    sans: "'Quicksand', sans-serif",
  },

  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
    "7xl": "4.5rem", // 72px
    "8xl": "6rem", // 96px
  },

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  letterSpacing: {
    tight: "-0.02em",
    normal: "0",
    wide: "0.02em",
    wider: "0.05em",
    widest: "0.1em",
  },
} as const;

// Spacing
export const spacing = {
  px: "1px",
  0: "0",
  0.5: "0.125rem",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
} as const;

// Border radius
export const borderRadius = {
  none: "0",
  sm: "0.25rem",
  default: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.5rem",
  "2xl": "2rem",
  full: "9999px",
} as const;

// Shadows
export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
  default: "0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.4)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)",
  cyan: `0 10px 25px -5px ${semanticColors.shadow.cyan}`,
  cyanLight: `0 4px 12px ${semanticColors.shadow.cyan}`,
  magenta: `0 10px 25px -5px ${semanticColors.shadow.magenta}`,
} as const;

// Transitions
export const transitions = {
  fast: "150ms ease",
  default: "300ms ease",
  slow: "500ms ease",
  colors:
    "color 300ms ease, background-color 300ms ease, border-color 300ms ease",
  transform: "transform 300ms ease",
  all: "all 300ms ease",
} as const;

// Z-index layers
export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modal: 40,
  popover: 50,
  tooltip: 60,
} as const;

// Breakpoints
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// Export complete theme object
export const theme = {
  colors,
  semanticColors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  zIndex,
  breakpoints,
} as const;

export default theme;
