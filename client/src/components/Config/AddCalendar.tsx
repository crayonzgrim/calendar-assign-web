import { Box, styled, css } from '@mui/material'
import React from 'react'
import { DateForm } from '../dateForm'
import { Layout } from '../Layout'

export const AddCalendar = styled(() => {
  return (
    <Layout>
      <Box sx={{ border: '2px dashed red', height: '100%' }}>
        Add Calendar Section
      </Box>
    </Layout>
  )
})(({ theme }) => {
  return css``
})
