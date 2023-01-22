import React from 'react'
import {
  styled,
  css,
  Box,
  Typography,
  Divider,
  FormControl,
  Button
} from '@mui/material'
import { EventInput } from '@fullcalendar/core'
import { TextField } from '../textField'

type DateFormProps = {
  data: EventInput[]

  setData: React.Dispatch<React.SetStateAction<EventInput[]>>
}

export const DateForm = styled((props: DateFormProps) => {
  /** Property */
  const { data, setData, ...others } = props

  /** Function */
  const handleChangeForm = (e: any) => {
    // console.log(e)
  }

  const handleTitleChange = (e: any) => {
    console.log(e.target.value)
  }

  /** Render */
  return (
    <Box
      {...others}
      component={'form'}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        mb: 5
      }}
    >
      <FormControl
        sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}
        onChange={(e) => handleChangeForm(e)}
      >
        <TextField
          label="제목"
          value={''}
          required={false}
          onChange={(e) => handleTitleChange(e)}
        />
        <TextField label="시작 날짜" value={''} required={true} />
        <TextField label="마지막 날짜" value={''} required={true} />
        <TextField label="메모" value={''} required={false} />
        <TextField label="색상" value={''} required={false} />

        <Button
          variant={'contained'}
          sx={{ mt: 2, width: '100px', ml: 'auto' }}
        >
          등록
        </Button>
      </FormControl>

      <Divider
        orientation={'horizontal'}
        sx={{ border: '0.5px solid lightGray', mt: 5 }}
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
