import { createBrowserRouter } from 'react-router-dom'
import { CustomCalendar } from '../components'
import { AddCalendar, ListsCalendar } from '../components/Config'
import { Home } from '../components/home'
import { ErrorPage } from '../pages/ErrorPage'
import Root from '../pages/Root'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/calendar', element: <CustomCalendar /> },
      { path: '/add-calendar', element: <AddCalendar /> },
      { path: '/calendar-lists', element: <ListsCalendar /> }
    ]
  }
])
