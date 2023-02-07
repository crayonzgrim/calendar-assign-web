"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
//QAmzPB0qUtS9aO5I
const app = (0, express_1.default)();
const PORT = process.env.DB_PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// app.use('/books', getAllRouter)
mongoose_1.default.set("strictQuery", true);
mongoose_1.default
    .connect(`mongodb+srv://${process.env.DB_ID}:${process.env.DB_PW}@cluster0.eeavtgs.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("Mongoose connected"))
    .then(() => {
    app.listen(PORT);
})
    .catch((err) => console.log(err));
