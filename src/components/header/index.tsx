import React from 'react'
import { Box, TextField, styled, css, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

type HeaderProps = {
  //
}

export const Header = styled((props: HeaderProps) => {
  /** Property */
  const { ...others } = props

  /** Function */

  /** Render */
  return (
    <Box {...others}>
      <Typography> Header section </Typography>
      <Box>
        <Link to="custom">
          <Button variant="outlined">Full-Calendar</Button>
        </Link>

        <Link to="new">
          <Button variant="outlined">React-Calendar</Button>
        </Link>
      </Box>
    </Box>
  )
})(({ theme }) => {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 5rem;
    border: 1px dashed red;

    margin-bottom: 20px;
  `
})
