import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "../src/utils";

export const contexts = [
  {
    icon: "box",
    title: "Themes",
    components: [ThemeProvider],
    params: [
      {
        name: "Default theme",
        props: { theme: defaultTheme, default: true }
      },
      { name: "Dark theme", props: { theme: darkTheme } }
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false
    }
  }
];
