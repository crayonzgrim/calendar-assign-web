import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../../components'

const Root = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  )
}

export default Root
