import React from 'react'
import {
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
  styled,
  css,
  AccordionSummary,
  Typography,
  AccordionDetails
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { DateForm } from '../dateForm'
import { DateSelectArg } from '@fullcalendar/core'
import { CalendarInfoType } from '../../types'

type AccordionProps = {
  formInfo: CalendarInfoType
  setFormInfo: (value: CalendarInfoType) => void
  handleDateSelect: (selectInfo: DateSelectArg) => void
}

export const Accordion = styled((props: AccordionProps) => {
  /** Property */
  const { formInfo, setFormInfo, handleDateSelect, ...others } = props

  /** Function */

  /** Render */
  return (
    <MuiAccordion {...others}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>달력에 등록하기</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <DateForm
          formInfo={formInfo}
          setFormInfo={setFormInfo}
          handleDateSelect={handleDateSelect}
        />
      </AccordionDetails>
    </MuiAccordion>
  )
})(({ theme }) => {
  return css``
})
