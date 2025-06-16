// Theme configuration based on NerdCrater logo colors
type ThemeColors = {
  primary: string
  secondary: string
  accent: string
}

// NerdCrater brand colors from logo
export const defaultThemeColors: ThemeColors = {
  primary: "#F49F1C", // Orange from logo
  secondary: "#030E4F", // Navy blue from logo
  accent: "#FF8C00", // Complementary orange accent
}

// Function to generate CSS variables from theme colors
export function generateThemeCSS(colors: ThemeColors): string {
  return `
    :root {
      --color-primary: ${colors.primary};
      --color-primary-light: #FFB84D;
      --color-primary-dark: #E8890B;
      --color-secondary: ${colors.secondary};
      --color-secondary-light: #1E3A8A;
      --color-secondary-dark: #020B3F;
      --color-accent: ${colors.accent};
      --color-accent-light: #FFA500;
      --color-accent-dark: #FF7F00;
      --gradient-primary: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
      --gradient-secondary: linear-gradient(135deg, ${colors.secondary}, ${colors.accent});
      --gradient-accent: linear-gradient(135deg, ${colors.accent}, ${colors.primary});
    }
  `
}

// Predefined theme options
export const themeOptions = [
  {
    name: "NerdCrater",
    colors: {
      primary: "#F49F1C", // Orange from logo
      secondary: "#030E4F", // Navy blue from logo
      accent: "#FF8C00", // Complementary orange accent
    },
  },
]
