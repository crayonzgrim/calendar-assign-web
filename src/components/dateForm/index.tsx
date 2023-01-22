import React from 'react'
import { styled, css, Box, Typography, Divider } from '@mui/material'
import { EventInput } from '@fullcalendar/core'
import { TextField } from '../textField'

type DateFormProps = {
  data: EventInput[]
  toValue: string
  fromValue: string
}

export const DateForm = styled((props: DateFormProps) => {
  /** Property */
  const { data, toValue, fromValue, ...others } = props

  /** Function */

  /** Render */
  return (
    <Box
      {...others}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        mb: 5
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Typography sx={{ textAlign: 'center' }}>FROM</Typography>
        {data.map((info) => {
          if (info.start) {
            return <TextField label="시작 날짜" value={info.start} />
          }

          if (info.end) {
            return <TextField label="마지막 날짜" value={info.end} />
          }

          return null
        })}
      </Box>

      <Divider
        orientation={'horizontal'}
        sx={{ border: '0.5px solid lightGray', m: 2, mt: 2 }}
      />

      {/* <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}> */}
      {/*   <Typography sx={{ textAlign: 'center' }}>TO</Typography> */}
      {/* <TextField label="제목" value={toValue} /> */}
      {/* <TextField label="날짜" value={toValue} /> */}
      {/* <TextField label="내용" value={toValue} /> */}
      {/* </Box> */}
    </Box>
  )
})(({ theme }) => {
  return css`
    padding: 0 10px;
  `
})
