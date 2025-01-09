import { createBrowserRouter } from 'react-router-dom'

import ElementPage from '../pages/elements/ElementPage'

export const routes = createBrowserRouter([{ path: '/', element: <ElementPage /> }])
