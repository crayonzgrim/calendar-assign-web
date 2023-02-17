import React from 'react'
import { Box, styled, css, Typography } from '@mui/material'

type BodyProps = {
  display?: string
}

export const Body = styled((props: BodyProps) => {
  /** Property */
  const { display, ...others } = props

  /** Function */

  /** Render */
  return (
    <Box {...others}>
      <Typography>{display ?? ''}</Typography>
    </Box>
  )
})(({ theme }) => {
  return css`
    margin-top: 20px;
    border: 1px dashed red;
    padding: 0 20px;
  `
})
