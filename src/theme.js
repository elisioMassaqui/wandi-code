import { extendTheme } from "@chakra-ui/react";

const tema = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});
export default tema;