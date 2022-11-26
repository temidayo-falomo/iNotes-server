"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var user_routes_1 = __importDefault(require("./routes/user-routes"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = (0, express_1.default)();
//MIDDLEWARES
//!ANY LINK INCLUDED HERE WOULD BE BE ABLE TO ACCESS THIS API
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "https://inotes-mini.netlify.app"],
}));
app.use(express_1.default.json());
app.use("/api", user_routes_1.default);
//CONNECT MONGODB & START SERVER
mongoose_1.default
    .connect("".concat(process.env.MONGODB_URL))
    .then(function () {
    app.listen(process.env.PORT);
})
    .then(function () {
    console.log("Connected to Database");
})
    .catch(function (err) {
    console.log(err);
});
