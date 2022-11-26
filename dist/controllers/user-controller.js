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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePin = exports.unLock = exports.lockNote = exports.unPinNote = exports.pinNote = exports.completelyDeleteNote = exports.recoverNote = exports.deleteFolder = exports.updateNote = exports.removeNote = exports.deleteNoteToRecents = exports.addFolder = exports.addNote = exports.getUser = exports.addUser = exports.getAllUsers = void 0;
var User_1 = __importDefault(require("../models/User"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
//GET ALL CURRENT USERS USING
var getAllUsers = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, User_1.default.find()];
            case 1:
                users = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, console.log(error_1)];
            case 3:
                if (!users) {
                    return [2 /*return*/, res.status(404).json({ message: "Users Not Found!" })];
                }
                return [2 /*return*/, res.status(200).json({ users: users })];
        }
    });
}); };
exports.getAllUsers = getAllUsers;
//ADD USER
var addUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var existingUser, error_2, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, User_1.default.findById(req.body.userId)];
            case 1:
                existingUser = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, console.log(error_2)];
            case 3:
                if (existingUser) {
                    return [2 /*return*/, res.status(404).json({ message: "Already Logged In!" })];
                }
                user = new User_1.default({
                    fullName: req.body.fullName,
                    userAvatar: req.body.userAvatar,
                    _id: req.body.userId,
                    notes: req.body.notes,
                    folderNames: req.body.folderNames,
                    password: req.body.password,
                });
                try {
                    user.save();
                }
                catch (error) {
                    return [2 /*return*/, console.log(error)];
                }
                return [2 /*return*/, res.status(200).json({ message: "Successfuully Created Profile" })];
        }
    });
}); };
exports.addUser = addUser;
//GET INFO OF LOGGED IN USER
var getUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.findById(userId, "-_id")];
            case 2:
                user = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                return [2 /*return*/, res.status(404).json({ message: "Something went wrong." })];
            case 4:
                if (!user) {
                    return [2 /*return*/, res.status(404).json({ message: "User Not Found" })];
                }
                return [2 /*return*/, res.status(200).json({ user: user })];
        }
    });
}); };
exports.getUser = getUser;
//ADD NEW NOTE
var addNote = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var note, currentUser, hashedNoteText, noteToBeAdded, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentUser = req.body.userId;
                hashedNoteText = bcryptjs_1.default.hashSync(req.body.noteText);
                noteToBeAdded = {
                    folder: req.body.folderName,
                    noteText: req.body.noteText,
                    noteTitle: req.body.noteTitle,
                    date: req.body.date,
                    pinned: req.body.pinnedState,
                    timestamp: req.body.timestamp,
                    locked: req.body.lockedState,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.findByIdAndUpdate(currentUser, {
                        $push: { notes: noteToBeAdded },
                    })];
            case 2:
                note = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.log(error_4);
                return [3 /*break*/, 4];
            case 4:
                if (!note) {
                    return [2 /*return*/, res.status(404).json({ message: "Note Not Found" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Added Note!" })];
        }
    });
}); };
exports.addNote = addNote;
//ADD NEW FOLDER
var addFolder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var folder, currentUser, folderTobeAdded, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentUser = req.body.userId;
                folderTobeAdded = {
                    folderName: req.body.currentFoldername,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.findByIdAndUpdate(currentUser, {
                        $push: { folderNames: folderTobeAdded },
                    })];
            case 2:
                folder = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                console.log(error_5);
                return [3 /*break*/, 4];
            case 4:
                if (!folder) {
                    return [2 /*return*/, res.status(404).json({ message: "Unable to add Folder" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Added Folder!" })];
        }
    });
}); };
exports.addFolder = addFolder;
//TAKE NOTE TO REC DELETED
var deleteNoteToRecents = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var note, currentUser, noteToBeAdded, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentUser = req.body.userId;
                noteToBeAdded = {
                    folder: req.body.folderName,
                    noteText: req.body.noteText,
                    noteTitle: req.body.noteTitle,
                    date: req.body.date,
                    pinned: req.body.pinnedState,
                    timestamp: req.body.timestamp,
                    _id: req.body.currentNoteId,
                    locked: req.body.lockedState,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.findByIdAndUpdate(currentUser, {
                        $push: { deleted: noteToBeAdded },
                    })];
            case 2:
                note = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_6 = _a.sent();
                console.log(error_6);
                return [3 /*break*/, 4];
            case 4:
                if (!note) {
                    return [2 /*return*/, res.status(404).json({ message: "Unable to delete note" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Suuccesfully Deleted Note!" })];
        }
    });
}); };
exports.deleteNoteToRecents = deleteNoteToRecents;
//TO REMOVE NOTE IMMEDIATELY AFTER BEING DELETED
var removeNote = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var note, currentUser, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentUser = req.body.userId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.findByIdAndUpdate(currentUser, {
                        $pull: { notes: { _id: req.body.currentNoteId } },
                    })];
            case 2:
                note = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_7 = _a.sent();
                console.log(error_7);
                return [3 /*break*/, 4];
            case 4:
                if (!note) {
                    return [2 /*return*/, res.status(404).json({ message: "Unable to Remove note" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Suuccesfully Removed Note!" })];
        }
    });
}); };
exports.removeNote = removeNote;
//UPDATE NOTE WITH NEW TEXT & TITLE
var updateNote = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var note, result, currentUser, index, error_8;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentUser = req.body.userId;
                index = req.body.index;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.updateOne({ _id: currentUser }, {
                        $set: (_a = {},
                            _a["notes.".concat(index, ".noteText")] = req.body.editedNote,
                            _a["notes.".concat(index, ".noteTitle")] = req.body.noteTitle,
                            _a["notes.".concat(index, ".timestamp")] = req.body.timestamp,
                            _a),
                    })];
            case 2:
                note = _b.sent();
                return [3 /*break*/, 4];
            case 3:
                error_8 = _b.sent();
                console.log(error_8);
                return [3 /*break*/, 4];
            case 4:
                if (!note) {
                    return [2 /*return*/, res.status(404).json({ message: "Unable to Update note" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Suuccesfully Updated Note!" })];
        }
    });
}); };
exports.updateNote = updateNote;
//DELETE FOLDER TO RECENTLY DELETED
var deleteFolder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var note, currentUser, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentUser = req.body.userId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.findByIdAndUpdate(currentUser, {
                        $pull: { folderNames: { folderName: req.body.folderName } },
                    })];
            case 2:
                note = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_9 = _a.sent();
                console.log(error_9);
                return [3 /*break*/, 4];
            case 4:
                if (!note) {
                    return [2 /*return*/, res.status(404).json({ message: "Unable to Remove Folder" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Suuccesfully Removed Folder!" })];
        }
    });
}); };
exports.deleteFolder = deleteFolder;
//TO RECOVER NOTE
var recoverNote = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var note, currentUser, noteToBeAdded, error_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentUser = req.body.userId;
                noteToBeAdded = {
                    folder: req.body.folderName,
                    noteText: req.body.noteText,
                    noteTitle: req.body.noteTitle,
                    date: req.body.date,
                    pinned: req.body.pinnedState,
                    timestamp: req.body.timestamp,
                    _id: req.body.currentNoteId,
                    locked: req.body.lockedState,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.findByIdAndUpdate(currentUser, {
                        $push: { notes: noteToBeAdded },
                    })];
            case 2:
                note = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_10 = _a.sent();
                console.log(error_10);
                return [3 /*break*/, 4];
            case 4:
                if (!note) {
                    return [2 /*return*/, res.status(404).json({ message: "Unable to recover note" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Suuccesfully Recovered Note!" })];
        }
    });
}); };
exports.recoverNote = recoverNote;
//DELETE NOTE FROM RECENTLY DELETED
var completelyDeleteNote = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var note, currentUser, error_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentUser = req.body.userId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.findByIdAndUpdate(currentUser, {
                        $pull: { deleted: { _id: req.body.currentNoteId } },
                    })];
            case 2:
                note = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_11 = _a.sent();
                console.log(error_11);
                return [3 /*break*/, 4];
            case 4:
                if (!note) {
                    return [2 /*return*/, res
                            .status(404)
                            .json({ message: "Unable to Completely Remove note" })];
                }
                return [2 /*return*/, res
                        .status(200)
                        .json({ message: "Suuccesfully Removed Note Completely!" })];
        }
    });
}); };
exports.completelyDeleteNote = completelyDeleteNote;
//PIN NOTE
var pinNote = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var note, currentUser, index, error_12;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentUser = req.body.userId;
                index = req.body.index;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.updateOne({ _id: currentUser }, {
                        $set: (_a = {},
                            _a["notes.".concat(index, ".pinned")] = true,
                            _a),
                    })];
            case 2:
                note = _b.sent();
                return [3 /*break*/, 4];
            case 3:
                error_12 = _b.sent();
                console.log(error_12);
                return [3 /*break*/, 4];
            case 4:
                if (!note) {
                    return [2 /*return*/, res.status(404).json({ message: "Unable to Pin note" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Succesfully Pinned Note!" })];
        }
    });
}); };
exports.pinNote = pinNote;
//UNPIN NOTE
var unPinNote = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var note, currentUser, index, error_13;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentUser = req.body.userId;
                index = req.body.index;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.updateOne({ _id: currentUser }, {
                        $set: (_a = {},
                            _a["notes.".concat(index, ".pinned")] = false,
                            _a),
                    })];
            case 2:
                note = _b.sent();
                return [3 /*break*/, 4];
            case 3:
                error_13 = _b.sent();
                console.log(error_13);
                return [3 /*break*/, 4];
            case 4:
                if (!note) {
                    return [2 /*return*/, res.status(404).json({ message: "Unable to Unpin note" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Succesfully unPinned Note!" })];
        }
    });
}); };
exports.unPinNote = unPinNote;
//LOCK NOTE
var lockNote = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var note, currentUser, index, error_14;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentUser = req.body.userId;
                index = req.body.index;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.updateOne({ _id: currentUser }, {
                        $set: (_a = {},
                            _a["notes.".concat(index, ".locked")] = true,
                            _a),
                    })];
            case 2:
                note = _b.sent();
                return [3 /*break*/, 4];
            case 3:
                error_14 = _b.sent();
                console.log(error_14);
                return [3 /*break*/, 4];
            case 4:
                if (!note) {
                    return [2 /*return*/, res.status(404).json({ message: "Unable to Lock note" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Succesfully Locked Note!" })];
        }
    });
}); };
exports.lockNote = lockNote;
//UNLOCK NOTE
var unLock = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var note, currentUser, index, error_15;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentUser = req.body.userId;
                index = req.body.index;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.updateOne({ _id: currentUser }, {
                        $set: (_a = {},
                            _a["notes.".concat(index, ".locked")] = false,
                            _a),
                    })];
            case 2:
                note = _b.sent();
                return [3 /*break*/, 4];
            case 3:
                error_15 = _b.sent();
                console.log(error_15);
                return [3 /*break*/, 4];
            case 4:
                if (!note) {
                    return [2 /*return*/, res.status(404).json({ message: "Unable to unLock note" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Succesfully Locked Note!" })];
        }
    });
}); };
exports.unLock = unLock;
//CHANGE PASSWORD
var changePin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, currentUser, error_16;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentUser = req.body.userId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.findByIdAndUpdate(currentUser, {
                        password: req.body.newPassword,
                    })];
            case 2:
                user = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_16 = _a.sent();
                console.log(error_16);
                return [3 /*break*/, 4];
            case 4:
                if (!user) {
                    return [2 /*return*/, res.status(404).json({ message: "Unable to Change Pin" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Succesfully Changed Pin!" })];
        }
    });
}); };
exports.changePin = changePin;
