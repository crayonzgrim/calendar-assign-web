"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./router");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/", router_1.getAllRouter);
mongoose_1.default.set("strictQuery", true);
/** Connected name with crayonzgrim */
mongoose_1.default
    .connect(`mongodb+srv://${process.env.DB_ID}:${process.env.DB_PW}@cluster0.eeavtgs.mongodb.net/calendar?retryWrites=true&w=majority`)
    .then(() => console.log("Mongoose connected"))
    .then(() => {
    app.listen(PORT);
})
    .catch((err) => console.log(err));
