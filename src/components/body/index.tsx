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
  return (
    <Box {...others}>이 자리에는 클릭한 날짜에 맞는 메모가 들어갈 예정</Box>
  )
})(({ theme }) => {
  return css``
})
