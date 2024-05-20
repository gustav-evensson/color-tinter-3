export type ThemeColor = {
  h: number;
  s: number;
  l: number;
};

export type Radius = "0" | "0.3" | "0.5" | "0.75" | "1.0";

export type Theme = {
  name: string;
  displayColor: {
    light: string;
    dark: string;
  };
  radius: Radius;
  colors: {
    light: {
      background: ThemeColor;
      foreground: ThemeColor;
      card: ThemeColor;
      cardForeground: ThemeColor;
      popover: ThemeColor;
      popoverForeground: ThemeColor;
      primary: ThemeColor;
      primaryForeground: ThemeColor;
      secondary: ThemeColor;
      secondaryForeground: ThemeColor;
      muted: ThemeColor;
      mutedForeground: ThemeColor;
      accent: ThemeColor;
      accentForeground: ThemeColor;
      destructive: ThemeColor;
      destructiveForeground: ThemeColor;
      border: ThemeColor;
      input: ThemeColor;
      ring: ThemeColor;
    };
    dark: {
      background: ThemeColor;
      foreground: ThemeColor;
      card: ThemeColor;
      cardForeground: ThemeColor;
      popover: ThemeColor;
      popoverForeground: ThemeColor;
      primary: ThemeColor;
      primaryForeground: ThemeColor;
      secondary: ThemeColor;
      secondaryForeground: ThemeColor;
      muted: ThemeColor;
      mutedForeground: ThemeColor;
      accent: ThemeColor;
      accentForeground: ThemeColor;
      destructive: ThemeColor;
      destructiveForeground: ThemeColor;
      border: ThemeColor;
      input: ThemeColor;
      ring: ThemeColor;
    };
  };
};

export const themes: { [key: string]: Theme } = {
  zinc: {
    name: "Zinc",
    displayColor: {
      light: "#18181B",
      dark: "#52525B"
    },
    radius: "0.5",
    colors: {
      light: {
        background: { h: 0, s: 0, l: 100 },
        foreground: { h: 240, s: 10, l: 3.9 },
        card: { h: 0, s: 0, l: 100 },
        cardForeground: { h: 240, s: 10, l: 3.9 },
        popover: { h: 0, s: 0, l: 100 },
        popoverForeground: { h: 240, s: 10, l: 3.9 },
        primary: { h: 240, s: 5.9, l: 10 },
        primaryForeground: { h: 0, s: 0, l: 98 },
        secondary: { h: 240, s: 4.8, l: 95.9 },
        secondaryForeground: { h: 240, s: 5.9, l: 10 },
        muted: { h: 240, s: 4.8, l: 95.9 },
        mutedForeground: { h: 240, s: 3.8, l: 46.1 },
        accent: { h: 240, s: 4.8, l: 95.9 },
        accentForeground: { h: 240, s: 5.9, l: 10 },
        destructive: { h: 0, s: 84.2, l: 60.2 },
        destructiveForeground: { h: 0, s: 0, l: 98 },
        border: { h: 240, s: 5.9, l: 90 },
        input: { h: 240, s: 5.9, l: 90 },
        ring: { h: 240, s: 5.9, l: 10 },
      },
      dark: {
        background: { h: 240, s: 10, l: 3.9 },
        foreground: { h: 0, s: 0, l: 98 },
        card: { h: 240, s: 10, l: 3.9 },
        cardForeground: { h: 0, s: 0, l: 98 },
        popover: { h: 240, s: 10, l: 3.9 },
        popoverForeground: { h: 0, s: 0, l: 98 },
        primary: { h: 0, s: 0, l: 98 },
        primaryForeground: { h: 240, s: 5.9, l: 10 },
        secondary: { h: 240, s: 3.7, l: 15.9 },
        secondaryForeground: { h: 0, s: 0, l: 98 },
        muted: { h: 240, s: 3.7, l: 15.9 },
        mutedForeground: { h: 240, s: 5, l: 64.9 },
        accent: { h: 240, s: 3.7, l: 15.9 },
        accentForeground: { h: 0, s: 0, l: 98 },
        destructive: { h: 0, s: 62.8, l: 30.6 },
        destructiveForeground: { h: 0, s: 0, l: 98 },
        border: { h: 240, s: 3.7, l: 15.9 },
        input: { h: 240, s: 3.7, l: 15.9 },
        ring: { h: 240, s: 4.9, l: 83.9 },
      },
    },
  },
  slate: {
    name: "Slate",
    displayColor: {
      light: "#677489",
      dark: "#4a5567"
    },
    radius: "0.5",
    colors: {
      light: {
        background: { h: 0, s: 0, l: 100 },
        foreground: { h: 222.2, s: 84, l: 4.9 },
        card: { h: 0, s: 0, l: 100 },
        cardForeground: { h: 222.2, s: 84, l: 4.9 },
        popover: { h: 0, s: 0, l: 100 },
        popoverForeground: { h: 222.2, s: 84, l: 4.9 },
        primary: { h: 222.2, s: 47.4, l: 11.2 },
        primaryForeground: { h: 210, s: 40, l: 98 },
        secondary: { h: 210, s: 40, l: 96.1 },
        secondaryForeground: { h: 222.2, s: 47.4, l: 11.2 },
        muted: { h: 210, s: 40, l: 96.1 },
        mutedForeground: { h: 215.4, s: 16.3, l: 46.9 },
        accent: { h: 210, s: 40, l: 96.1 },
        accentForeground: { h: 222.2, s: 47.4, l: 11.2 },
        destructive: { h: 0, s: 84.2, l: 60.2 },
        destructiveForeground: { h: 210, s: 40, l: 98 },
        border: { h: 214.3, s: 31.8, l: 91.4 },
        input: { h: 214.3, s: 31.8, l: 91.4 },
        ring: { h: 222.2, s: 84, l: 4.9 },
      },
      dark: {
        background: { h: 222.2, s: 84, l: 4.9 },
        foreground: { h: 210, s: 40, l: 98 },
        card: { h: 222.2, s: 84, l: 4.9 },
        cardForeground: { h: 210, s: 40, l: 98 },
        popover: { h: 222.2, s: 84, l: 4.9 },
        popoverForeground: { h: 210, s: 40, l: 98 },
        primary: { h: 210, s: 40, l: 98 },
        primaryForeground: { h: 222.2, s: 47.4, l: 11.2 },
        secondary: { h: 217.2, s: 32.6, l: 17.5 },
        secondaryForeground: { h: 210, s: 40, l: 98 },
        muted: { h: 217.2, s: 32.6, l: 17.5 },
        mutedForeground: { h: 215, s: 20.2, l: 65.1 },
        accent: { h: 217.2, s: 32.6, l: 17.5 },
        accentForeground: { h: 210, s: 40, l: 98 },
        destructive: { h: 0, s: 62.8, l: 30.6 },
        destructiveForeground: { h: 210, s: 40, l: 98 },
        border: { h: 217.2, s: 32.6, l: 17.5 },
        input: { h: 217.2, s: 32.6, l: 17.5 },
        ring: { h: 212.7, s: 26.8, l: 83.9 },
      },
    },
  },
  stone: {
    name: "Stone",
    displayColor: {
      light: "#77716d",
      dark : "#56534f"
    },
    radius: "0.5",
    colors: {
      light: {
        background: { h: 0, s: 0, l: 100 },
        foreground: { h: 20, s: 14.3, l: 4.1 },
        card: { h: 0, s: 0, l: 100 },
        cardForeground: { h: 20, s: 14.3, l: 4.1 },
        popover: { h: 0, s: 0, l: 100 },
        popoverForeground: { h: 20, s: 14.3, l: 4.1 },
        primary: { h: 24, s: 9.8, l: 10 },
        primaryForeground: { h: 60, s: 9.1, l: 97.8 },
        secondary: { h: 60, s: 4.8, l: 95.9 },
        secondaryForeground: { h: 24, s: 9.8, l: 10 },
        muted: { h: 60, s: 4.8, l: 95.9 },
        mutedForeground: { h: 25, s: 5.3, l: 44.7 },
        accent: { h: 60, s: 4.8, l: 95.9 },
        accentForeground: { h: 24, s: 9.8, l: 10 },
        destructive: { h: 0, s: 84.2, l: 60.2 },
        destructiveForeground: { h: 60, s: 9.1, l: 97.8 },
        border: { h: 20, s: 5.9, l: 90 },
        input: { h: 20, s: 5.9, l: 90 },
        ring: { h: 20, s: 14.3, l: 4.1 },
      },
      dark: {
        background: { h: 20, s: 14.3, l: 4.1 },
        foreground: { h: 60, s: 9.1, l: 97.8 },
        card: { h: 20, s: 14.3, l: 4.1 },
        cardForeground: { h: 60, s: 9.1, l: 97.8 },
        popover: { h: 20, s: 14.3, l: 4.1 },
        popoverForeground: { h: 60, s: 9.1, l: 97.8 },
        primary: { h: 60, s: 9.1, l: 97.8 },
        primaryForeground: { h: 24, s: 9.8, l: 10 },
        secondary: { h: 12, s: 6.5, l: 15.1 },
        secondaryForeground: { h: 60, s: 9.1, l: 97.8 },
        muted: { h: 12, s: 6.5, l: 15.1 },
        mutedForeground: { h: 24, s: 5.4, l: 63.9 },
        accent: { h: 12, s: 6.5, l: 15.1 },
        accentForeground: { h: 60, s: 9.1, l: 97.8 },
        destructive: { h: 0, s: 62.8, l: 30.6 },
        destructiveForeground: { h: 60, s: 9.1, l: 97.8 },
        border: { h: 12, s: 6.5, l: 15.1 },
        input: { h: 12, s: 6.5, l: 15.1 },
        ring: { h: 24, s: 5.7, l: 82.9 },
      },
    },
  },
  gray: {
    name: "Gray",
    displayColor: {
      light: "#6c727f",
      dark: "#4d5562"
    },
    radius: "0.5",
    colors: {
      light: {
        background: { h: 0, s: 0, l: 100 },
        foreground: { h: 224, s: 71.4, l: 4.1 },
        card: { h: 0, s: 0, l: 100 },
        cardForeground: { h: 224, s: 71.4, l: 4.1 },
        popover: { h: 0, s: 0, l: 100 },
        popoverForeground: { h: 224, s: 71.4, l: 4.1 },
        primary: { h: 220.9, s: 39.3, l: 11 },
        primaryForeground: { h: 210, s: 20, l: 98 },
        secondary: { h: 220, s: 14.3, l: 95.9 },
        secondaryForeground: { h: 220.9, s: 39.3, l: 11 },
        muted: { h: 220, s: 14.3, l: 95.9 },
        mutedForeground: { h: 220, s: 8.9, l: 46.1 },
        accent: { h: 220, s: 14.3, l: 95.9 },
        accentForeground: { h: 220.9, s: 39.3, l: 11 },
        destructive: { h: 0, s: 84.2, l: 60.2 },
        destructiveForeground: { h: 210, s: 20, l: 98 },
        border: { h: 220, s: 13, l: 91 },
        input: { h: 220, s: 13, l: 91 },
        ring: { h: 224, s: 71.4, l: 4.1 },
      },
      dark: {
        background: { h: 224, s: 71.4, l: 4.1 },
        foreground: { h: 210, s: 20, l: 98 },
        card: { h: 224, s: 71.4, l: 4.1 },
        cardForeground: { h: 210, s: 20, l: 98 },
        popover: { h: 224, s: 71.4, l: 4.1 },
        popoverForeground: { h: 210, s: 20, l: 98 },
        primary: { h: 210, s: 20, l: 98 },
        primaryForeground: { h: 220.9, s: 39.3, l: 11 },
        secondary: { h: 215, s: 27.9, l: 16.9 },
        secondaryForeground: { h: 210, s: 20, l: 98 },
        muted: { h: 215, s: 27.9, l: 16.9 },
        mutedForeground: { h: 217.9, s: 10.6, l: 64.9 },
        accent: { h: 215, s: 27.9, l: 16.9 },
        accentForeground: { h: 210, s: 20, l: 98 },
        destructive: { h: 0, s: 62.8, l: 30.6 },
        destructiveForeground: { h: 210, s: 20, l: 98 },
        border: { h: 215, s: 27.9, l: 16.9 },
        input: { h: 215, s: 27.9, l: 16.9 },
        ring: { h: 216, s: 12.2, l: 83.9 },
      },
    },
  },
  neutral: {
    name: "Neutral",
    displayColor: {
      light: "#737373",
      dark: "#525252"
    },
    radius: "0.5",
    colors: {
      light: {
        background: { h: 0, s: 0, l: 100 },
        foreground: { h: 0, s: 0, l: 3.9 },
        card: { h: 0, s: 0, l: 100 },
        cardForeground: { h: 0, s: 0, l: 3.9 },
        popover: { h: 0, s: 0, l: 100 },
        popoverForeground: { h: 0, s: 0, l: 3.9 },
        primary: { h: 0, s: 0, l: 9 },
        primaryForeground: { h: 0, s: 0, l: 98 },
        secondary: { h: 0, s: 0, l: 96.1 },
        secondaryForeground: { h: 0, s: 0, l: 9 },
        muted: { h: 0, s: 0, l: 96.1 },
        mutedForeground: { h: 0, s: 0, l: 45.1 },
        accent: { h: 0, s: 0, l: 96.1 },
        accentForeground: { h: 0, s: 0, l: 9 },
        destructive: { h: 0, s: 84.2, l: 60.2 },
        destructiveForeground: { h: 0, s: 0, l: 98 },
        border: { h: 0, s: 0, l: 89.8 },
        input: { h: 0, s: 0, l: 89.8 },
        ring: { h: 0, s: 0, l: 3.9 },
      },
      dark: {
        background: { h: 0, s: 0, l: 3.9 },
        foreground: { h: 0, s: 0, l: 98 },
        card: { h: 0, s: 0, l: 3.9 },
        cardForeground: { h: 0, s: 0, l: 98 },
        popover: { h: 0, s: 0, l: 3.9 },
        popoverForeground: { h: 0, s: 0, l: 98 },
        primary: { h: 0, s: 0, l: 98 },
        primaryForeground: { h: 0, s: 0, l: 9 },
        secondary: { h: 0, s: 0, l: 14.9 },
        secondaryForeground: { h: 0, s: 0, l: 98 },
        muted: { h: 0, s: 0, l: 14.9 },
        mutedForeground: { h: 0, s: 0, l: 63.9 },
        accent: { h: 0, s: 0, l: 14.9 },
        accentForeground: { h: 0, s: 0, l: 98 },
        destructive: { h: 0, s: 62.8, l: 30.6 },
        destructiveForeground: { h: 0, s: 0, l: 98 },
        border: { h: 0, s: 0, l: 14.9 },
        input: { h: 0, s: 0, l: 14.9 },
        ring: { h: 0, s: 0, l: 83.1 },
      },
    },
  },
  red: {
    name: "Red",
    displayColor: {
      light: "#ca3a32",
      dark: "#ca3a32",
    },
    radius: "0.5",
    colors: {
      light: {
        background: { h: 0, s: 0, l: 100 },
        foreground: { h: 0, s: 0, l: 3.9 },
        card: { h: 0, s: 0, l: 100 },
        cardForeground: { h: 0, s: 0, l: 3.9 },
        popover: { h: 0, s: 0, l: 100 },
        popoverForeground: { h: 0, s: 0, l: 3.9 },
        primary: { h: 0, s: 72.2, l: 50.6 },
        primaryForeground: { h: 0, s: 85.7, l: 97.3 },
        secondary: { h: 0, s: 0, l: 96.1 },
        secondaryForeground: { h: 0, s: 0, l: 9 },
        muted: { h: 0, s: 0, l: 96.1 },
        mutedForeground: { h: 0, s: 0, l: 45.1 },
        accent: { h: 0, s: 0, l: 96.1 },
        accentForeground: { h: 0, s: 0, l: 9 },
        destructive: { h: 0, s: 84.2, l: 60.2 },
        destructiveForeground: { h: 0, s: 0, l: 98 },
        border: { h: 0, s: 0, l: 89.8 },
        input: { h: 0, s: 0, l: 89.8 },
        ring: { h: 0, s: 72.2, l: 50.6 },
      },
      dark: {
        background: { h: 0, s: 0, l: 3.9 },
        foreground: { h: 0, s: 0, l: 98 },
        card: { h: 0, s: 0, l: 3.9 },
        cardForeground: { h: 0, s: 0, l: 98 },
        popover: { h: 0, s: 0, l: 3.9 },
        popoverForeground: { h: 0, s: 0, l: 98 },
        primary: { h: 0, s: 72.2, l: 50.6 },
        primaryForeground: { h: 0, s: 85.7, l: 97.3 },
        secondary: { h: 0, s: 0, l: 14.9 },
        secondaryForeground: { h: 0, s: 0, l: 98 },
        muted: { h: 0, s: 0, l: 14.9 },
        mutedForeground: { h: 0, s: 0, l: 63.9 },
        accent: { h: 0, s: 0, l: 14.9 },
        accentForeground: { h: 0, s: 0, l: 98 },
        destructive: { h: 0, s: 62.8, l: 30.6 },
        destructiveForeground: { h: 0, s: 0, l: 98 },
        border: { h: 0, s: 0, l: 14.9 },
        input: { h: 0, s: 0, l: 14.9 },
        ring: { h: 0, s: 72.2, l: 50.6 },
      },
    },
  },
  rose: {
    name: "Rose",
    displayColor: {
      light: "#cf364c",
      dark: "#cf364c"
    },
    radius: "0.5",
    colors: {
      light: {
        background: { h: 0, s: 0, l: 100 },
        foreground: { h: 240, s: 10, l: 3.9 },
        card: { h: 0, s: 0, l: 100 },
        cardForeground: { h: 240, s: 10, l: 3.9 },
        popover: { h: 0, s: 0, l: 100 },
        popoverForeground: { h: 240, s: 10, l: 3.9 },
        primary: { h: 346.8, s: 77.2, l: 49.8 },
        primaryForeground: { h: 355.7, s: 100, l: 97.3 },
        secondary: { h: 240, s: 4.8, l: 95.9 },
        secondaryForeground: { h: 240, s: 5.9, l: 10 },
        muted: { h: 240, s: 4.8, l: 95.9 },
        mutedForeground: { h: 240, s: 3.8, l: 46.1 },
        accent: { h: 240, s: 4.8, l: 95.9 },
        accentForeground: { h: 240, s: 5.9, l: 10 },
        destructive: { h: 0, s: 84.2, l: 60.2 },
        destructiveForeground: { h: 0, s: 0, l: 98 },
        border: { h: 240, s: 5.9, l: 90 },
        input: { h: 240, s: 5.9, l: 90 },
        ring: { h: 346.8, s: 77.2, l: 49.8 },
      },
      dark: {
        background: { h: 20, s: 14.3, l: 4.1 },
        foreground: { h: 0, s: 0, l: 95 },
        card: { h: 24, s: 9.8, l: 10 },
        cardForeground: { h: 0, s: 0, l: 95 },
        popover: { h: 0, s: 0, l: 9 },
        popoverForeground: { h: 0, s: 0, l: 95 },
        primary: { h: 346.8, s: 77.2, l: 49.8 },
        primaryForeground: { h: 355.7, s: 100, l: 97.3 },
        secondary: { h: 240, s: 3.7, l: 15.9 },
        secondaryForeground: { h: 0, s: 0, l: 98 },
        muted: { h: 0, s: 0, l: 15 },
        mutedForeground: { h: 240, s: 5, l: 64.9 },
        accent: { h: 12, s: 6.5, l: 15.1 },
        accentForeground: { h: 0, s: 0, l: 98 },
        destructive: { h: 0, s: 62.8, l: 30.6 },
        destructiveForeground: { h: 0, s: 85.7, l: 97.3 },
        border: { h: 240, s: 3.7, l: 15.9 },
        input: { h: 240, s: 3.7, l: 15.9 },
        ring: { h: 346.8, s: 77.2, l: 49.8 },
      },
    },
  },
  orange: {
    name: "Orange",
    displayColor: {
      light: "#e87b35",
      dark: "#d9622b"
    },
    radius: "0.5",
    colors: {
      light: {
        background: { h: 0, s: 0, l: 100 },
        foreground: { h: 20, s: 14.3, l: 4.1 },
        card: { h: 0, s: 0, l: 100 },
        cardForeground: { h: 20, s: 14.3, l: 4.1 },
        popover: { h: 0, s: 0, l: 100 },
        popoverForeground: { h: 20, s: 14.3, l: 4.1 },
        primary: { h: 24.6, s: 95, l: 53.1 },
        primaryForeground: { h: 60, s: 9.1, l: 97.8 },
        secondary: { h: 60, s: 4.8, l: 95.9 },
        secondaryForeground: { h: 24, s: 9.8, l: 10 },
        muted: { h: 60, s: 4.8, l: 95.9 },
        mutedForeground: { h: 25, s: 5.3, l: 44.7 },
        accent: { h: 60, s: 4.8, l: 95.9 },
        accentForeground: { h: 24, s: 9.8, l: 10 },
        destructive: { h: 0, s: 84.2, l: 60.2 },
        destructiveForeground: { h: 60, s: 9.1, l: 97.8 },
        border: { h: 20, s: 5.9, l: 90 },
        input: { h: 20, s: 5.9, l: 90 },
        ring: { h: 24.6, s: 95, l: 53.1 },
      },
      dark: {
        background: { h: 20, s: 14.3, l: 4.1 },
        foreground: { h: 60, s: 9.1, l: 97.8 },
        card: { h: 20, s: 14.3, l: 4.1 },
        cardForeground: { h: 60, s: 9.1, l: 97.8 },
        popover: { h: 20, s: 14.3, l: 4.1 },
        popoverForeground: { h: 60, s: 9.1, l: 97.8 },
        primary: { h: 20.5, s: 90.2, l: 48.2 },
        primaryForeground: { h: 60, s: 9.1, l: 97.8 },
        secondary: { h: 12, s: 6.5, l: 15.1 },
        secondaryForeground: { h: 60, s: 9.1, l: 97.8 },
        muted: { h: 12, s: 6.5, l: 15.1 },
        mutedForeground: { h: 24, s: 5.4, l: 63.9 },
        accent: { h: 12, s: 6.5, l: 15.1 },
        accentForeground: { h: 60, s: 9.1, l: 97.8 },
        destructive: { h: 0, s: 72.2, l: 50.6 },
        destructiveForeground: { h: 60, s: 9.1, l: 97.8 },
        border: { h: 12, s: 6.5, l: 15.1 },
        input: { h: 12, s: 6.5, l: 15.1 },
        ring: { h: 20.5, s: 90.2, l: 48.2 },
      },
    },
  },
  green: {
    name: "Green",
    displayColor: {
      light: "#4ca154",
      dark: "#5ec26a"
    },
    radius: "0.5",
    colors: {
      light: {
        background: { h: 0, s: 0, l: 100 },
        foreground: { h: 240, s: 10, l: 3.9 },
        card: { h: 0, s: 0, l: 100 },
        cardForeground: { h: 240, s: 10, l: 3.9 },
        popover: { h: 0, s: 0, l: 100 },
        popoverForeground: { h: 240, s: 10, l: 3.9 },
        primary: { h: 142.1, s: 76.2, l: 36.3 },
        primaryForeground: { h: 355.7, s: 100, l: 97.3 },
        secondary: { h: 240, s: 4.8, l: 95.9 },
        secondaryForeground: { h: 240, s: 5.9, l: 10 },
        muted: { h: 240, s: 4.8, l: 95.9 },
        mutedForeground: { h: 240, s: 3.8, l: 46.1 },
        accent: { h: 240, s: 4.8, l: 95.9 },
        accentForeground: { h: 240, s: 5.9, l: 10 },
        destructive: { h: 0, s: 84.2, l: 60.2 },
        destructiveForeground: { h: 0, s: 0, l: 98 },
        border: { h: 240, s: 5.9, l: 90 },
        input: { h: 240, s: 5.9, l: 90 },
        ring: { h: 142.1, s: 76.2, l: 36.3 },
      },
      dark: {
        background: { h: 20, s: 14.3, l: 4.1 },
        foreground: { h: 0, s: 0, l: 95 },
        card: { h: 24, s: 9.8, l: 10 },
        cardForeground: { h: 0, s: 0, l: 95 },
        popover: { h: 0, s: 0, l: 9 },
        popoverForeground: { h: 0, s: 0, l: 95 },
        primary: { h: 142.1, s: 70.6, l: 45.3 },
        primaryForeground: { h: 144.9, s: 80.4, l: 10 },
        secondary: { h: 240, s: 3.7, l: 15.9 },
        secondaryForeground: { h: 0, s: 0, l: 98 },
        muted: { h: 0, s: 0, l: 15 },
        mutedForeground: { h: 240, s: 5, l: 64.9 },
        accent: { h: 12, s: 6.5, l: 15.1 },
        accentForeground: { h: 0, s: 0, l: 98 },
        destructive: { h: 0, s: 62.8, l: 30.6 },
        destructiveForeground: { h: 0, s: 85.7, l: 97.3 },
        border: { h: 240, s: 3.7, l: 15.9 },
        input: { h: 240, s: 3.7, l: 15.9 },
        ring: { h: 142.4, s: 71.8, l: 29.2 },
      },
    },
  },
  blue: {
    name: "Blue",
    displayColor: {
      light: "#3662e3",
      dark: "#4e80ee"
    },
    radius: "0.5",
    colors: {
      light: {
        background: { h: 0, s: 0, l: 100 },
        foreground: { h: 222.2, s: 84, l: 4.9 },
        card: { h: 0, s: 0, l: 100 },
        cardForeground: { h: 222.2, s: 84, l: 4.9 },
        popover: { h: 0, s: 0, l: 100 },
        popoverForeground: { h: 222.2, s: 84, l: 4.9 },
        primary: { h: 221.2, s: 83.2, l: 53.3 },
        primaryForeground: { h: 210, s: 40, l: 98 },
        secondary: { h: 210, s: 40, l: 96.1 },
        secondaryForeground: { h: 222.2, s: 47.4, l: 11.2 },
        muted: { h: 210, s: 40, l: 96.1 },
        mutedForeground: { h: 215.4, s: 16.3, l: 46.9 },
        accent: { h: 210, s: 40, l: 96.1 },
        accentForeground: { h: 222.2, s: 47.4, l: 11.2 },
        destructive: { h: 0, s: 84.2, l: 60.2 },
        destructiveForeground: { h: 210, s: 40, l: 98 },
        border: { h: 214.3, s: 31.8, l: 91.4 },
        input: { h: 214.3, s: 31.8, l: 91.4 },
        ring: { h: 221.2, s: 83.2, l: 53.3 },
      },
      dark: {
        background: { h: 222.2, s: 84, l: 4.9 },
        foreground: { h: 210, s: 40, l: 98 },
        card: { h: 222.2, s: 84, l: 4.9 },
        cardForeground: { h: 210, s: 40, l: 98 },
        popover: { h: 222.2, s: 84, l: 4.9 },
        popoverForeground: { h: 210, s: 40, l: 98 },
        primary: { h: 217.2, s: 91.2, l: 59.8 },
        primaryForeground: { h: 222.2, s: 47.4, l: 11.2 },
        secondary: { h: 217.2, s: 32.6, l: 17.5 },
        secondaryForeground: { h: 210, s: 40, l: 98 },
        muted: { h: 217.2, s: 32.6, l: 17.5 },
        mutedForeground: { h: 215, s: 20.2, l: 65.1 },
        accent: { h: 217.2, s: 32.6, l: 17.5 },
        accentForeground: { h: 210, s: 40, l: 98 },
        destructive: { h: 0, s: 62.8, l: 30.6 },
        destructiveForeground: { h: 210, s: 40, l: 98 },
        border: { h: 217.2, s: 32.6, l: 17.5 },
        input: { h: 217.2, s: 32.6, l: 17.5 },
        ring: { h: 224.3, s: 76.3, l: 48 },
      },
    },
  },
  yellow: {
    name: "Yellow",
    displayColor: {
      light: "#f3ce49",
      dark: "#f3ce49"
    },
    radius: "0.5",
    colors: {
      light: {
        background: { h: 0, s: 0, l: 100 },
        foreground: { h: 20, s: 14.3, l: 4.1 },
        card: { h: 0, s: 0, l: 100 },
        cardForeground: { h: 20, s: 14.3, l: 4.1 },
        popover: { h: 0, s: 0, l: 100 },
        popoverForeground: { h: 20, s: 14.3, l: 4.1 },
        primary: { h: 47.9, s: 95.8, l: 53.1 },
        primaryForeground: { h: 26, s: 83.3, l: 14.1 },
        secondary: { h: 60, s: 4.8, l: 95.9 },
        secondaryForeground: { h: 24, s: 9.8, l: 10 },
        muted: { h: 60, s: 4.8, l: 95.9 },
        mutedForeground: { h: 25, s: 5.3, l: 44.7 },
        accent: { h: 60, s: 4.8, l: 95.9 },
        accentForeground: { h: 24, s: 9.8, l: 10 },
        destructive: { h: 0, s: 84.2, l: 60.2 },
        destructiveForeground: { h: 60, s: 9.1, l: 97.8 },
        border: { h: 20, s: 5.9, l: 90 },
        input: { h: 20, s: 5.9, l: 90 },
        ring: { h: 20, s: 14.3, l: 4.1 },
      },
      dark: {
        background: { h: 20, s: 14.3, l: 4.1 },
        foreground: { h: 60, s: 9.1, l: 97.8 },
        card: { h: 20, s: 14.3, l: 4.1 },
        cardForeground: { h: 60, s: 9.1, l: 97.8 },
        popover: { h: 20, s: 14.3, l: 4.1 },
        popoverForeground: { h: 60, s: 9.1, l: 97.8 },
        primary: { h: 47.9, s: 95.8, l: 53.1 },
        primaryForeground: { h: 26, s: 83.3, l: 14.1 },
        secondary: { h: 12, s: 6.5, l: 15.1 },
        secondaryForeground: { h: 60, s: 9.1, l: 97.8 },
        muted: { h: 12, s: 6.5, l: 15.1 },
        mutedForeground: { h: 24, s: 5.4, l: 63.9 },
        accent: { h: 12, s: 6.5, l: 15.1 },
        accentForeground: { h: 60, s: 9.1, l: 97.8 },
        destructive: { h: 0, s: 62.8, l: 30.6 },
        destructiveForeground: { h: 60, s: 9.1, l: 97.8 },
        border: { h: 12, s: 6.5, l: 15.1 },
        input: { h: 12, s: 6.5, l: 15.1 },
        ring: { h: 35.5, s: 91.7, l: 32.9 },
      },
    },
  },
  violet: {
    name: "Violet",
    displayColor: {
      light: "#733de4",
      dark: "#652cd1"
    },
    radius: "0.5",
    colors: {
      light: {
        background: { h: 0, s: 0, l: 100 },
        foreground: { h: 224, s: 71.4, l: 4.1 },
        card: { h: 0, s: 0, l: 100 },
        cardForeground: { h: 224, s: 71.4, l: 4.1 },
        popover: { h: 0, s: 0, l: 100 },
        popoverForeground: { h: 224, s: 71.4, l: 4.1 },
        primary: { h: 262.1, s: 83.3, l: 57.8 },
        primaryForeground: { h: 210, s: 20, l: 98 },
        secondary: { h: 220, s: 14.3, l: 95.9 },
        secondaryForeground: { h: 220.9, s: 39.3, l: 11 },
        muted: { h: 220, s: 14.3, l: 95.9 },
        mutedForeground: { h: 220, s: 8.9, l: 46.1 },
        accent: { h: 220, s: 14.3, l: 95.9 },
        accentForeground: { h: 220.9, s: 39.3, l: 11 },
        destructive: { h: 0, s: 84.2, l: 60.2 },
        destructiveForeground: { h: 210, s: 20, l: 98 },
        border: { h: 220, s: 13, l: 91 },
        input: { h: 220, s: 13, l: 91 },
        ring: { h: 262.1, s: 83.3, l: 57.8 },
      },
      dark: {
        background: { h: 224, s: 71.4, l: 4.1 },
        foreground: { h: 210, s: 20, l: 98 },
        card: { h: 224, s: 71.4, l: 4.1 },
        cardForeground: { h: 210, s: 20, l: 98 },
        popover: { h: 224, s: 71.4, l: 4.1 },
        popoverForeground: { h: 210, s: 20, l: 98 },
        primary: { h: 263.4, s: 70, l: 50.4 },
        primaryForeground: { h: 210, s: 20, l: 98 },
        secondary: { h: 215, s: 27.9, l: 16.9 },
        secondaryForeground: { h: 210, s: 20, l: 98 },
        muted: { h: 215, s: 27.9, l: 16.9 },
        mutedForeground: { h: 217.9, s: 10.6, l: 64.9 },
        accent: { h: 215, s: 27.9, l: 16.9 },
        accentForeground: { h: 210, s: 20, l: 98 },
        destructive: { h: 0, s: 62.8, l: 30.6 },
        destructiveForeground: { h: 210, s: 20, l: 98 },
        border: { h: 215, s: 27.9, l: 16.9 },
        input: { h: 215, s: 27.9, l: 16.9 },
        ring: { h: 263.4, s: 70, l: 50.4 },
      }
    }
  }
};

export const themeArray = ["zinc", "slate", "stone", "gray", "neutral", "red", "rose", "orange", "green", "blue", "yellow", "violet"]

export const radiusArray: Radius[] = ["0", "0.3", "0.5", "0.75", "1.0"]

export const themeGroups = {
  base: {
    name: "Base",
    colors: [
      {
        name: "Background",
        key: "background",
      },
      {
        name: "Foreground",
        key: "foreground",
      }
    ],
  },
  card: {
    name: "Card",
    colors: [
      {
        name: "Card",
        key: "card",
      },
      {
        name: "Card Foreground",
        key: "cardForeground",
      }
    ],
  },
  popover: {
    name: "Popover",
    colors: [
      {
        name: "Popover",
        key: "popover",
      },
      {
        name: "Popover Foreground",
        key: "popoverForeground",
      }
    ],
  },
  primary: {
    name: "Primary",
    colors: [
      {
        name: "Primary",
        key: "primary",
      },
      {
        name: "Primary Foreground",
        key: "primaryForeground",
      }
    ],
  },
  secondary: {
    name: "Secondary",
    colors: [
      {
        name: "Secondary",
        key: "secondary",
      },
      {
        name: "Secondary Foreground",
        key: "secondaryForeground",
      }
    ],
  },
  muted: {
    name: "Muted",
    colors: [
      {
        name: "Muted",
        key: "muted",
      },
      {
        name: "Muted Foreground",
        key: "mutedForeground",
      }
    ],
  },
  accent: {
    name: "Accent",
    colors: [
      {
        name: "Accent",
        key: "accent",
      },
      {
        name: "Accent Foreground",
        key: "accentForeground",
      }
    ],
  },
  destructive: {
    name: "Destructive",
    colors: [
      {
        name: "Destructive",
        key: "destructive",
      },
      {
        name: "Destructive Foreground",
        key: "destructiveForeground",
      }
    ],
  },
  border: {
    name: "Border",
    colors: [
      {
        name: "Border",
        key: "border",
      },
    ],
  },
  input: {
    name: "Input",
    colors: [
      {
        name: "Input",
        key: "input",
      },
    ],
  },
  ring: {
    name: "Ring",
    colors: [
      {
        name: "Ring",
        key: "ring",
      },
    ],
  },
  
};

export const setCssTheme = (theme: Theme, resolvedTheme: string) => {
  document.getElementById("componentDisplay")?.style.setProperty("--radius", `${parseFloat(theme.radius)}rem`);
    if (resolvedTheme === "light") {
      // Background
      document.getElementById("componentDisplay")?.style.setProperty(
        "--background",
        `${theme.colors.light.background.h} ${theme.colors.light.background.s} ${theme.colors.light.background.l}`
      );
      // Foreground
      document.getElementById("componentDisplay")?.style.setProperty(
        "--foreground",
        `${theme.colors.light.foreground.h} ${theme.colors.light.foreground.s} ${theme.colors.light.foreground.l}`
      );
      // Card
      document.getElementById("componentDisplay")?.style.setProperty("--card", `${theme.colors.light.card.h} ${theme.colors.light.card.s} ${theme.colors.light.card.l}`);
      // Card-foreground
      document.getElementById("componentDisplay")?.style.setProperty(
        "--card-foreground",
        `${theme.colors.light.cardForeground.h} ${theme.colors.light.cardForeground.s} ${theme.colors.light.cardForeground.l}`
      );
      // Popover
      document.getElementById("componentDisplay")?.style.setProperty(
        "--popover",
        `${theme.colors.light.popover.h} ${theme.colors.light.popover.s} ${theme.colors.light.popover.l}`
      );
      // Popover-foreground
      document.getElementById("componentDisplay")?.style.setProperty(
        "--popover-foreground",
        `${theme.colors.light.popoverForeground.h} ${theme.colors.light.popoverForeground.s} ${theme.colors.light.popoverForeground.l}`
      );
      // Primary
      document.getElementById("componentDisplay")?.style.setProperty(
        "--primary",
        `${theme.colors.light.primary.h} ${theme.colors.light.primary.s} ${theme.colors.light.primary.l}`
      );
      // Primary-foreground
      document.getElementById("componentDisplay")?.style.setProperty(
        "--primary-foreground",
        `${theme.colors.light.primaryForeground.h} ${theme.colors.light.primaryForeground.s} ${theme.colors.light.primaryForeground.l}`
      );
      // Secondary
      document.getElementById("componentDisplay")?.style.setProperty(
        "--secondary",
        `${theme.colors.light.secondary.h} ${theme.colors.light.secondary.s} ${theme.colors.light.secondary.l}`
      );
      // Secondary-foreground
      document.getElementById("componentDisplay")?.style.setProperty(
        "--secondary-foreground",
        `${theme.colors.light.secondaryForeground.h} ${theme.colors.light.secondaryForeground.s} ${theme.colors.light.secondaryForeground.l}`
      );
      // Muted
      document.getElementById("componentDisplay")?.style.setProperty(
        "--muted",
        `${theme.colors.light.muted.h} ${theme.colors.light.muted.s} ${theme.colors.light.muted.l}`
      );
      // Muted-foreground
      document.getElementById("componentDisplay")?.style.setProperty(
        "--muted-foreground",
        `${theme.colors.light.mutedForeground.h} ${theme.colors.light.mutedForeground.s} ${theme.colors.light.mutedForeground.l}`
      );
      // Accent
      document.getElementById("componentDisplay")?.style.setProperty(
        "--accent",
        `${theme.colors.light.accent.h} ${theme.colors.light.accent.s} ${theme.colors.light.accent.l}`
      );
      // Accent-foreground
      document.getElementById("componentDisplay")?.style.setProperty(
        "--accent-foreground",
        `${theme.colors.light.accentForeground.h} ${theme.colors.light.accentForeground.s} ${theme.colors.light.accentForeground.l}`
      );
      // Destructive
      document.getElementById("componentDisplay")?.style.setProperty(
        "--destructive",
        `${theme.colors.light.destructive.h} ${theme.colors.light.destructive.s} ${theme.colors.light.destructive.l}`
      );
      // Destructive-foreground
      document.getElementById("componentDisplay")?.style.setProperty(
        "--destructive-foreground",
        `${theme.colors.light.destructiveForeground.h} ${theme.colors.light.destructiveForeground.s} ${theme.colors.light.destructiveForeground.l}`
      );
      // Border
      document.getElementById("componentDisplay")?.style.setProperty(
        "--border",
        `${theme.colors.light.border.h} ${theme.colors.light.border.s} ${theme.colors.light.border.l}`
      );
      // Input
      document.getElementById("componentDisplay")?.style.setProperty(
        "--input",
        `${theme.colors.light.input.h} ${theme.colors.light.input.s} ${theme.colors.light.input.l}`
      );
      // Ring
      document.getElementById("componentDisplay")?.style.setProperty("--ring", `${theme.colors.light.ring.h} ${theme.colors.light.ring.s} ${theme.colors.light.ring.l}`);
    } else {
      // Background
      document.getElementById("componentDisplay")?.style.setProperty(
        "--background",
        `${theme.colors.dark.background.h} ${theme.colors.dark.background.s} ${theme.colors.dark.background.l}`
      );
      // Foreground
      document.getElementById("componentDisplay")?.style.setProperty(
        "--foreground",
        `${theme.colors.dark.foreground.h} ${theme.colors.dark.foreground.s} ${theme.colors.dark.foreground.l}`
      );
      // Card
      document.getElementById("componentDisplay")?.style.setProperty("--card", `${theme.colors.dark.card.h} ${theme.colors.dark.card.s} ${theme.colors.dark.card.l}`);
      // Card-foreground
      document.getElementById("componentDisplay")?.style.setProperty(
        "--card-foreground",
        `${theme.colors.dark.cardForeground.h} ${theme.colors.dark.cardForeground.s} ${theme.colors.dark.cardForeground.l}`
      );
      // Popover
      document.getElementById("componentDisplay")?.style.setProperty(
        "--popover",
        `${theme.colors.dark.popover.h} ${theme.colors.dark.popover.s} ${theme.colors.dark.popover.l}`
      );
      // Popover-foreground
      document.getElementById("componentDisplay")?.style.setProperty(
        "--popover-foreground",
        `${theme.colors.dark.popoverForeground.h} ${theme.colors.dark.popoverForeground.s} ${theme.colors.dark.popoverForeground.l}`
      );
      // Primary
      document.getElementById("componentDisplay")?.style.setProperty(
        "--primary",
        `${theme.colors.dark.primary.h} ${theme.colors.dark.primary.s} ${theme.colors.dark.primary.l}`
      );
      // Primary-foreground
      document.getElementById("componentDisplay")?.style.setProperty(
        "--primary-foreground",
        `${theme.colors.dark.primaryForeground.h} ${theme.colors.dark.primaryForeground.s} ${theme.colors.dark.primaryForeground.l}`
      );
      // Secondary
      document.getElementById("componentDisplay")?.style.setProperty(
        "--secondary",
        `${theme.colors.dark.secondary.h} ${theme.colors.dark.secondary.s} ${theme.colors.dark.secondary.l}`
      );
      // Secondary-foreground
      document.getElementById("componentDisplay")?.style.setProperty(
        "--secondary-foreground",
        `${theme.colors.dark.secondaryForeground.h} ${theme.colors.dark.secondaryForeground.s} ${theme.colors.dark.secondaryForeground.l}`
      );
      // Muted
      document.getElementById("componentDisplay")?.style.setProperty("--muted", `${theme.colors.dark.muted.h} ${theme.colors.dark.muted.s} ${theme.colors.dark.muted.l}`);
      // Muted-foreground
      document.getElementById("componentDisplay")?.style.setProperty(
        "--muted-foreground",
        `${theme.colors.dark.mutedForeground.h} ${theme.colors.dark.mutedForeground.s} ${theme.colors.dark.mutedForeground.l}`
      );
      // Accent
      document.getElementById("componentDisplay")?.style.setProperty(
        "--accent",
        `${theme.colors.dark.accent.h} ${theme.colors.dark.accent.s} ${theme.colors.dark.accent.l}`
      );
      // Accent-foreground
      document.getElementById("componentDisplay")?.style.setProperty(
        "--accent-foreground",
        `${theme.colors.dark.accentForeground.h} ${theme.colors.dark.accentForeground.s} ${theme.colors.dark.accentForeground.l}`
      );
      // Destructive
      document.getElementById("componentDisplay")?.style.setProperty(
        "--destructive",
        `${theme.colors.dark.destructive.h} ${theme.colors.dark.destructive.s} ${theme.colors.dark.destructive.l}`
      );
      // Destructive-foreground
      document.getElementById("componentDisplay")?.style.setProperty(
        "--destructive-foreground",
        `${theme.colors.dark.destructiveForeground.h} ${theme.colors.dark.destructiveForeground.s} ${theme.colors.dark.destructiveForeground.l}`
      );
      // Border
      document.getElementById("componentDisplay")?.style.setProperty(
        "--border",
        `${theme.colors.dark.border.h} ${theme.colors.dark.border.s} ${theme.colors.dark.border.l}`
      );
      // Input
      document.getElementById("componentDisplay")?.style.setProperty("--input", `${theme.colors.dark.input.h} ${theme.colors.dark.input.s} ${theme.colors.dark.input.l}`);
      // Ring
      document.getElementById("componentDisplay")?.style.setProperty("--ring", `${theme.colors.dark.ring.h} ${theme.colors.dark.ring.s} ${theme.colors.dark.ring.l}`);
    }
}
