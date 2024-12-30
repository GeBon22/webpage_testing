import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"


export function CustomCalendar() {
    const [date, setDate] = useState<Date | undefined>(new Date())

return (
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border bg-white text-black dark:bg-black dark:text-white"
  />
)
}