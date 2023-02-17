import { Box, styled, css, Typography } from '@mui/material'
import React from 'react'

type HomeProps = {
  //
}

export const Home = styled((props: HomeProps) => {
  /** Property */
  const { ...others } = props

  /** Function */

  /** Render */
  return (
    <Box {...others}>
      <Typography sx={{ mb: 1 }}>안녕하세요.</Typography>
      <Typography>달력에 저장하고 싶은 것이 있다면 저장해보세요!</Typography>
    </Box>
  )
})(({ theme }) => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `
})
