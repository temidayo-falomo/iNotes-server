"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_controller_1 = require("../controllers/user-controller");
var userRouter = express_1.default.Router();
//ROUTES
userRouter.post("/add-user", user_controller_1.addUser);
userRouter.get("/get-user/:id", user_controller_1.getUser);
userRouter.post("/add-note", user_controller_1.addNote);
userRouter.post("/add-folder", user_controller_1.addFolder);
userRouter.put("/delete-note", user_controller_1.deleteNoteToRecents);
userRouter.put("/remove-note", user_controller_1.removeNote);
userRouter.put("/edit-note", user_controller_1.updateNote);
userRouter.put("/delete-folder", user_controller_1.deleteFolder);
userRouter.put("/recover-note", user_controller_1.recoverNote);
userRouter.put("/completely-delete", user_controller_1.completelyDeleteNote);
userRouter.put("/pin-note", user_controller_1.pinNote);
userRouter.put("/unpin-note", user_controller_1.unPinNote);
userRouter.put("/lock-note", user_controller_1.lockNote);
userRouter.put("/unlock-note", user_controller_1.unLock);
userRouter.put("/change-pin", user_controller_1.changePin);
exports.default = userRouter;
