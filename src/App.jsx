import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from './layout/DefaultLayout'
import Travels from "./pages/Travels"

function App() {



  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Travels />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
