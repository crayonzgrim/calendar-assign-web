import React from 'react'
import { Box, styled, css } from '@mui/material'

type BodyProps = {
  //
}

export const Body = styled((props: BodyProps) => {
  /** Property */
  const { ...others } = props

  /** Function */

  /** Render */
  return <Box {...others}>Body Section</Box>
})(({ theme }) => {
  return css`
    margin-top: 20px;
    border: 1px dashed red;
    padding: 0 20px;
  `
})
