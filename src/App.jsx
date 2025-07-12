import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { myRoute } from './router/Router'

const App = () => {
  // let myRoute=createBrowserRouter([
  //     {
  //     path:"/",
  //     element:<Layout/>,
  //     children:[
  //       {
  //         index:true,
  //         element: <Home/>

  //       },
  //       {
  //         path:"/about",
  //         element: <About/>
  //       },
  //       {
  //         path:"/contact",
  //         element: <Contact/>
  //       },
  //       {
  //         path:"/login",
  //         element:<Login/>
  //       }
  //     ]
  //   }
  // ])
  return (
    <div>
     

      <RouterProvider router={myRoute}>

      </RouterProvider>
    </div>
  )
}

export default App
