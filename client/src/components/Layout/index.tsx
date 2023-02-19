import { Box, styled, css } from '@mui/material'
import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

const Container = styled(Box)(({ theme }) => {
  return css`
    margin: 0 auto;
    padding: 0 150px;

    ${theme.breakpoints.down('xl')} {
      border: 2px dashed red;
    }

    ${theme.breakpoints.down('lg')} {
      border: 2px dashed blue;
    }

    ${theme.breakpoints.down('md')} {
      border: 2px dashed green;
    }

    ${theme.breakpoints.down('sm')} {
      border: 2px dashed orange;
    }
  `
})

export const Layout = (props: LayoutProps) => {
  /** Property */
  const { children, ...others } = props

  /** Render */
  return <Container {...others}>{children}</Container>
}
