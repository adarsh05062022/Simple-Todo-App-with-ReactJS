
import "./App.css";
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Home from "./Home";

function App() {
  return (
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
  );
}

export default App;
