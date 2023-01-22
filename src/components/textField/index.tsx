import React from 'react'
import {
  styled,
  css,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps
} from '@mui/material'
import { DateInput, EventInput } from '@fullcalendar/core'

type TextFieldProps = {
  label?: string
  value?: DateInput | undefined
} & MuiTextFieldProps

export const TextField = styled((props: TextFieldProps) => {
  /** Property */
  const { label = '', value = '' } = props

  /** Function */

  /** Render */
  return (
    <MuiTextField
      fullWidth
      label={'hello'}
      value={value}
      margin={'dense'}
      size={'small'}
      onChange={() => {}}
    />
  )
})(({ theme }) => {
  return css``
})