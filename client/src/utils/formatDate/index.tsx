import React from 'react'
import { DateTime } from 'luxon'

type FormatDateProps = {
  date: string
  // year: string
  // month: string
  // day: string
}

export const FormatDate = (props: FormatDateProps) => {
  /** Property */
  const { date, ...others } = props

  /** Function */

  /** Render */
  return DateTime.fromISO(date)
}
