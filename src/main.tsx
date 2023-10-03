import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Footer from './componentes/footer/Footer'
import Header from './componentes/header/Header'
import Main from './componentes/main/Main'
import "./main.css"
import Contato from './componentes/contato/Contato';

const router = createBrowserRouter([
  {
    path: "/",
    element:<>
              <Header />
              <Main />
              <Footer />
            </>,
  },
  {
    path: "/sobre",
    element:<>
              <Header />
              <div className='content-main'>Pagina sobre</div>
              <Footer />
            </>,
  },
  {
    path: "/desing",
    element:<>
              <Header />
              <div className='content-main'>pagina noticia</div>
              <Footer />
            </>,
  },
  {
    path: "/contato",
    element:<>
              <Header />
              <Contato/>
              <Footer />
            </>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
