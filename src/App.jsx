import './App.css'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { Form } from './components/form'
import { View } from './components/view'
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<View />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </ChakraProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
