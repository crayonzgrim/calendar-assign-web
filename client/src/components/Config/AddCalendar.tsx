import { Box, styled, css } from '@mui/material'
import React from 'react'

import { DateForm } from '../dateForm'
import { Layout } from '../Layout'

type AppCalendarProps = {
  //
}

export const AddCalendar = styled((props: AppCalendarProps) => {
  /** Property */
  const { ...others } = props

  /** Function */

  /** Render */
  return (
    <Layout {...others}>
      <Box sx={{ border: '2px dashed red', height: '100%' }}>
        Edit Calendar Section
      </Box>
    </Layout>
  )
})(({ theme }) => {
  return css``
})
