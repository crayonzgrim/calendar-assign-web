import express, { NextFunction, Request, Response } from "express";
import { Calendar_Model } from "../model";
import {
  getAllCalendarInfo,
  getById,
  addCalendarInfo,
  updateCalendarInfo,
  deleteCalendarInfo,
} from "../controller";

const router = express.Router();

export const getAllRouter = router.get("/", getAllCalendarInfo);
export const getCalendarRouter = router.get("/:id", getById);
export const addCalendarRouter = router.post("/", addCalendarInfo);
export const updateCalendarRouter = router.put("/:id", updateCalendarInfo);
export const deleteCalendarRouter = router.delete("/:id", deleteCalendarInfo);
