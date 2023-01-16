import { Box, TextField, styled, css } from '@mui/material'

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
      {/* 날짜선택하는 섹션  => 양력/음력 */}
      <Box>날짜 선택 Select</Box>
      {/* 날짜에 맞는 내용 */}
      <TextField />
    </Box>
  )
})(({ theme }) => {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
  `
})
