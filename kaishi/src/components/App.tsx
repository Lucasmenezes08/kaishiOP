import { BrowserRouter , Routes , Route } from "react-router"
import '../index.css'
import Homepage from "../routes/Homepage"
 "../routes/Homepage"


export default function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  )
}


