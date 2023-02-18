"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCalendarInfo = exports.updateCalendarInfo = exports.addCalendarInfo = exports.getById = exports.getAllCalendarInfo = void 0;
const model_1 = require("../model");
const getAllCalendarInfo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let calendarInfo;
    try {
        calendarInfo = yield model_1.Calendar_Model.find();
        console.log("getAll >> ", calendarInfo);
    }
    catch (err) {
        console.error(err);
    }
    if (!calendarInfo) {
        return res.status(404).json({ message: "No Products Found" });
    }
    return res.status(200).json({ calendarInfo });
});
exports.getAllCalendarInfo = getAllCalendarInfo;
const getById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    let calendarInfo;
    try {
        calendarInfo = yield model_1.Calendar_Model.findById(id);
    }
    catch (err) {
        console.error(err);
    }
    if (!calendarInfo) {
        return res.status(404).json({ message: "Failed get by id..." });
    }
    return res.status(200).json({ calendarInfo });
});
exports.getById = getById;
const addCalendarInfo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, start, end, display, backgroundColor } = req.body;
    let calendarInfo;
    try {
        calendarInfo = new model_1.Calendar_Model({
            title,
            start,
            end,
            display,
            backgroundColor,
        });
        yield calendarInfo.save();
    }
    catch (err) {
        console.error(err);
    }
    if (!calendarInfo) {
        return res
            .status(500)
            .json({ message: "Unable to add calendar information" });
    }
    return res.status(201).json({ calendarInfo });
});
exports.addCalendarInfo = addCalendarInfo;
const updateCalendarInfo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { title, start, end, display, backgroundColor } = req.body;
    let calendarInfo;
    try {
        calendarInfo = yield model_1.Calendar_Model.findByIdAndUpdate(id, {
            title,
            start,
            end,
            display,
            backgroundColor,
        });
        if (calendarInfo) {
            calendarInfo = yield calendarInfo.save();
        }
    }
    catch (err) {
        console.error(err);
    }
    if (!calendarInfo) {
        return res.status(404).json({ message: "Unable To Update By This ID" });
    }
    return res.status(200).json({ calendarInfo });
});
exports.updateCalendarInfo = updateCalendarInfo;
const deleteCalendarInfo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    let calendarInfo;
    try {
        calendarInfo = yield model_1.Calendar_Model.findByIdAndRemove(id);
    }
    catch (err) {
        console.error(err);
    }
    if (!calendarInfo) {
        return res.status(404).json({ message: "Unable To Delete By This ID" });
    }
    return res
        .status(200)
        .json({ messag: "Calendar Information Successfully Deleted" });
});
exports.deleteCalendarInfo = deleteCalendarInfo;
