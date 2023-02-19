import { Box, styled, css, Typography } from '@mui/material'
import React from 'react'
import { Header } from '../header'
import { Layout } from '../Layout'

type HomeProps = {
  //
}

export const Home = styled((props: HomeProps) => {
  /** Property */
  const { ...others } = props

  /** Function */

  /** Render */
  return (
    <Layout {...others}>
      <Typography sx={{ mb: 1 }}>안녕하세요.</Typography>
      <Typography>달력에 저장하고 싶은 것이 있다면 저장해보세요!</Typography>
    </Layout>
  )
})(({ theme }) => {
  return css``
})
