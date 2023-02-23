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
      {/* <Box className="button-container"> */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained" size="small">
          <Typography variant="caption">HOME</Typography>
        </Button>
      </Link>

      <Link to="/calendar" style={{ textDecoration: 'none' }}>
        <Button variant="contained" size="small">
          Calendar
        </Button>
      </Link>

      <Link to="/add-calendar" style={{ textDecoration: 'none' }}>
        <Button variant="contained" size="small">
          Edit Calendar
        </Button>
      </Link>

      <Link to="/calendar-lists" style={{ textDecoration: 'none' }}>
        <Button variant="contained" size="small">
          Calendar Lists
        </Button>
      </Link>
      {/* </Box> */}
    </Layout>
  )
})(({ theme }) => {
  return css`
    margin-bottom: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    // .button-container {
    //   display: flex;
    //   border: 2px dashed red;
    // }
  `
})
