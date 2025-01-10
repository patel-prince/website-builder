import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../components'
import ElementPage from '../pages/elements/ElementPage'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/', element: <ElementPage /> }]
  }
])
