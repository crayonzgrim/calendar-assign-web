import { Request, Response, NextFunction } from "express";
import { parse } from "path";
import { Calendar_Model } from "../model";

export const getAllCalendarInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let calendarInfo;

  try {
    calendarInfo = await Calendar_Model.find();
    console.log("getAll >> ", calendarInfo);
  } catch (err) {
    console.error(err);
  }

  if (!calendarInfo) {
    return res.status(404).json({ message: "No Products Found" });
  }

  return res.status(200).json({ calendarInfo });
};

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  let calendarInfo;

  try {
    calendarInfo = await Calendar_Model.findById(id);
  } catch (err) {
    console.error(err);
  }

  if (!calendarInfo) {
    return res.status(404).json({ message: "Failed get by id..." });
  }

  return res.status(200).json({ calendarInfo });
};

export const addCalendarInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, start, end, display, backgroundColor } = req.body;

  let calendarInfo;

  try {
    calendarInfo = new Calendar_Model({
      title,
      start,
      end,
      display,
      backgroundColor,
    });

    await calendarInfo.save();
  } catch (err) {
    console.error(err);
  }

  if (!calendarInfo) {
    return res
      .status(500)
      .json({ message: "Unable to add calendar information" });
  }

  return res.status(201).json({ calendarInfo });
};

export const updateCalendarInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  const { title, start, end, display, backgroundColor } = req.body;

  let calendarInfo;

  try {
    calendarInfo = await Calendar_Model.findByIdAndUpdate(id, {
      title,
      start,
      end,
      display,
      backgroundColor,
    });

    if (calendarInfo) {
      calendarInfo = await calendarInfo.save();
    }
  } catch (err) {
    console.error(err);
  }

  if (!calendarInfo) {
    return res.status(404).json({ message: "Unable To Update By This ID" });
  }

  return res.status(200).json({ calendarInfo });
};

export const deleteCalendarInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  let calendarInfo;

  try {
    calendarInfo = await Calendar_Model.findByIdAndRemove(id);
  } catch (err) {
    console.error(err);
  }

  if (!calendarInfo) {
    return res.status(404).json({ message: "Unable To Delete By This ID" });
  }

  return res
    .status(200)
    .json({ messag: "Calendar Information Successfully Deleted" });
};
