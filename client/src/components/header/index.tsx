import React from 'react'
import { Box, TextField, styled, css, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { Layout } from '../Layout'

type HeaderProps = {
  //
}

export const Header = styled((props: HeaderProps) => {
  /** Property */
  const { ...others } = props

  /** Function */

  /** Render */
  return (
    <Layout {...others}>
      <Typography> Header section </Typography>
      <Box>
        <Link to="/" style={{ marginRight: '10px', textDecoration: 'none' }}>
          <Button variant="contained" size="small">
            <Typography variant="caption">HOME</Typography>
          </Button>
        </Link>

        <Link
          to="/calendar"
          style={{ marginRight: '10px', textDecoration: 'none' }}
        >
          <Button variant="contained" size="small">
            Calendar
          </Button>
        </Link>

        <Link
          to="/add-calendar"
          style={{ marginRight: '10px', textDecoration: 'none' }}
        >
          <Button variant="contained" size="small">
            Add Calendar
          </Button>
        </Link>

        <Link
          to="/calendar-lists"
          style={{ marginRight: '10px', textDecoration: 'none' }}
        >
          <Button variant="contained" size="small">
            Calendar Lists
          </Button>
        </Link>
      </Box>
    </Layout>
  )
})(({ theme }) => {
  return css`
    width: 100%;
    margin-bottom: 3rem;
  `
})
