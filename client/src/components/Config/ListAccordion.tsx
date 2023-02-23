import {
  Box,
  styled,
  css,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  IconButton
} from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteIcon from '@mui/icons-material/Delete'
import { CalendarInfoType } from '../../types'
import axios from 'axios'
import { BASE_URL } from '../../api'

type ListAccordionProps = {
  info: CalendarInfoType
  // setCalendar: any
}

export const ListAccordion = styled((props: ListAccordionProps) => {
  /** Property */
  const { info, ...others } = props
  const { _id, title, display, start, end } = info

  /** Function */
  const handleDelete = async (id: string | undefined) => {
    await axios.delete(`${BASE_URL}/${id}`).then((res) => console.log(res))
  }

  /** Render */
  return (
    <Box sx={{ display: 'flex', alignItems: 'start' }}>
      <Accordion {...others} sx={{ flex: 1, mr: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>제목 : {title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>시작 날짜 : {start}</Typography>
          <Typography>마지막 날짜 : {end}</Typography>
          <Typography>내용 : {display}</Typography>
        </AccordionDetails>
      </Accordion>
      <IconButton onClick={() => handleDelete(_id)}>
        <DeleteIcon />
      </IconButton>
    </Box>
  )
})(({ theme }) => {
  return css``
})
