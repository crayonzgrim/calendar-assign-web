import React, { useCallback, useContext, useEffect, useState } from 'react'
import { styled, css, Box, Button } from '@mui/material'
import { DateSelectArg } from '@fullcalendar/core'

import { TextField } from '../textField'
import { CalendarContextType, CalendarInfoType } from '../../types'
import { CalendarContext } from '../../context'
import axios from 'axios'
import { BASE_URL } from '../../api'

type DateFormProps = {
  // info: CalendarInfoType
  formInfo: CalendarInfoType
  setFormInfo: (value: CalendarInfoType) => void
  handleDateSelect: (selectInfo: DateSelectArg) => void
}

export const DateForm = styled((props: DateFormProps) => {
  /** Property */
  const { formInfo, setFormInfo, handleDateSelect, ...others } = props

  // const { calendarInfo, saveCalendarInfo, updateCalendarInfo } = useContext(
  //   CalendarContext
  // ) as CalendarContextType

  /** Function */
  const handleChangeField = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const { name, value } = e.target

      setFormInfo({
        ...formInfo,
        [name]: value
      })
    },
    [formInfo]
  )

  const sendRequest = async (formInfo: CalendarInfoType) => {
    await axios
      .post(BASE_URL, {
        title: formInfo.title,
        start: formInfo.start,
        end: formInfo.end,
        display: formInfo.display,
        backgroundColor: formInfo.backgroundColor
      })
      .then((res) => res.data)
  }

  const handleAddInfo = useCallback(
    (e: React.FormEvent, formInfo: CalendarInfoType) => {
      e.preventDefault()

      if (formInfo) {
        // saveCalendarInfo(formInfo)
        sendRequest(formInfo)
      }
    },
    [formInfo]
  )

  /** Render */
  return (
    <Box
      {...others}
      component="form"
      onSubmit={(e) => handleAddInfo(e, formInfo)}
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
        value={formInfo.title ?? ''}
        required={false}
        onChange={(e) => handleChangeField(e)}
      />
      <TextField
        name="start"
        label="시작 날짜"
        value={formInfo.start ?? ''}
        placeholder={'yyyy-MM-dd'}
        required={true}
        onChange={(e) => handleChangeField(e)}
      />
      <TextField
        name="end"
        label="마지막 날짜"
        value={formInfo.end ?? ''}
        placeholder={'yyyy-MM-dd'}
        required={true}
        onChange={(e) => handleChangeField(e)}
      />
      <TextField
        name="display"
        label="메모"
        value={formInfo.display ?? ''}
        multiline={true}
        required={false}
        onChange={(e) => handleChangeField(e)}
      />
      <TextField
        name="backgroundColor"
        // label="색상"
        type={'color'}
        value={formInfo.backgroundColor ?? '#000'}
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
