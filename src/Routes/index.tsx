import { Route, BrowserRouter, Routes as Routing } from 'react-router-dom'

import Home from "../Pages/Home";
import NewRoom from "../Pages/NewRoom";

const Routes = () => {
  return (
      <BrowserRouter>
        <Routing>
            <Route path='/' element={<Home />} />
            <Route path='/nova-sala' element={<NewRoom />} />
        </Routing>
      </BrowserRouter>
  )
}

export default Routes;