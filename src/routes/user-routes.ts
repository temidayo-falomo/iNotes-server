import express from "express";
import {
  addFolder,
  addNote,
  addUser,
  deleteFolder,
  deleteNoteToRecents,
  // getAllUsers,
  getUser,
  removeNote,
  updateNote,
} from "../controllers/user-controller";

const userRouter = express.Router();

// userRouter.get("/all-users", getAllUsers);
userRouter.post("/add-user", addUser);
userRouter.get("/get-user/:id", getUser);
userRouter.post("/add-note", addNote);
userRouter.post("/add-folder", addFolder);
userRouter.put("/delete-note", deleteNoteToRecents);
userRouter.put("/remove-note", removeNote);
userRouter.put("/edit-note", updateNote);
userRouter.put("/delete-folder", deleteFolder);

export default userRouter;
