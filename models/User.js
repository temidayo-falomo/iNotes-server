"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var UserSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    userAvatar: {
        type: String,
        required: true,
    },
    _id: {
        type: String,
        required: true,
    },
    notes: [
        {
            folder: String,
            noteText: String,
            noteTitle: String,
            date: String,
            pinned: Boolean,
            timestamp: String,
        },
    ],
    deleted: [
        {
            folder: String,
            noteText: String,
            noteTitle: String,
            date: String,
            pinned: Boolean,
            timestamp: String,
        },
    ],
    folderNames: [
        {
            folderName: String,
        },
    ],
});
exports.default = mongoose_1.default.model("User", UserSchema);
