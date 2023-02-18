import mongoose from "mongoose";

const Schema = mongoose.Schema;

const calendarSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  display: {
    type: String,
    required: false,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
});

export const Calendar_Model = mongoose.model("Calendar_Info", calendarSchema);
