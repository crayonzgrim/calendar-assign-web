"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCalendarRouter = exports.updateCalendarRouter = exports.addCalendarRouter = exports.getCalendarRouter = exports.getAllRouter = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller");
const router = express_1.default.Router();
exports.getAllRouter = router.get("/", controller_1.getAllCalendarInfo);
exports.getCalendarRouter = router.get("/:id", controller_1.getById);
exports.addCalendarRouter = router.post("/", controller_1.addCalendarInfo);
exports.updateCalendarRouter = router.put("/:id", controller_1.updateCalendarInfo);
exports.deleteCalendarRouter = router.delete("/:id", controller_1.deleteCalendarInfo);
