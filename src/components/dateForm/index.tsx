import React, { useCallback, useEffect, useState } from 'react'
import { styled, css, Box, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { DateSelectArg } from '@fullcalendar/core'

import { TextField } from '../textField'
import { RootState } from '../../redux/store'
import { call } from '../../utils/base'
import { addInfo } from '../../redux/calendarInfo'
import { CalendarInput } from '../../types'

type DateFormProps = {
  config: CalendarInput
  setConfig: React.Dispatch<React.SetStateAction<any>>
  handleDateSelect: (selectInfo: DateSelectArg) => void

  customTitle: string
  setCustomTitle: (value: string) => void
}

export const DateForm = styled((props: DateFormProps) => {
  /** Property */
  const {
    config,
    setConfig,
    handleDateSelect,
    customTitle,
    setCustomTitle,
    ...others
  } = props

  // const calendarInfo = useSelector((state: RootState) => state.addCalendar)

  const dispatch = useDispatch()

  /** Function */
  const handleChangeField = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const name = e.target.name
      const value = e.target.value

      setConfig({
        ...config,
        [name]: value
      })
    },
    [config, setConfig]
  )

  console.log('config > ', config)

  const handleAddData = useCallback(() => {
    dispatch(addInfo(config))
  }, [config])

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
      <TextField
        name="title"
        label="제목"
        value={config.title}
        required={false}
        onChange={(e) => handleChangeField(e)}
      />
      <TextField
        name="start"
        label="시작 날짜"
        value={config.start}
        placeholder={'yyyy-MM-dd'}
        required={true}
        onChange={(e) => handleChangeField(e)}
      />
      <TextField
        name="end"
        label="마지막 날짜"
        value={config.end}
        placeholder={'yyyy-MM-dd'}
        required={true}
        onChange={(e) => handleChangeField(e)}
      />
      <TextField
        name="memo"
        label="메모"
        value={config.memo}
        multiline={true}
        required={false}
        onChange={(e) => handleChangeField(e)}
      />
      <TextField
        name="color"
        label="색상"
        type={'color'}
        value={config.color}
        required={false}
        onChange={(e) => handleChangeField(e)}
      />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {/* <FormControlLabel */}
        {/*   label="All day" */}
        {/*   labelPlacement={'start'} */}
        {/*   control={<Checkbox onChange={(e) => handleChangeField(e)} />} */}
        {/*   sx={{ mr: 'auto' }} */}
        {/* /> */}

        <Button
          type="submit"
          variant={'contained'}
          onClick={handleAddData}
          sx={{ mt: 2, width: '100px', ml: 'auto' }}
        >
          추가
        </Button>
      </Box>
    </Box>
  )
})(({ theme }) => {
  return css`
    padding: 0 40px;
  `
})
