/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/Poppins/200.css";
import "@fontsource/Poppins/400.css";
import "@fontsource/Poppins/600.css";
import "@fontsource/Poppins/700.css";
import "@fontsource/Poppins/900.css";


const theme = extendTheme({
    fonts: {
      heading: `'Poppins', sans-serif`,
      body: `'Poppins', sans-serif`,
    }
});

export default theme;