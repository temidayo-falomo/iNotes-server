import express from "express";
import {
  addFolder,
  addNote,
  addUser,
  changePin,
  completelyDeleteNote,
  deleteFolder,
  deleteNoteToRecents,
  getUser,
  lockNote,
  pinNote,
  recoverNote,
  removeNote,
  unLock,
  unPinNote,
  updateNote,
} from "../controllers/user-controller";

const userRouter = express.Router();

//ROUTES
userRouter.post("/add-user", addUser);
userRouter.get("/get-user/:id", getUser);
userRouter.post("/add-note", addNote);
userRouter.post("/add-folder", addFolder);
userRouter.put("/delete-note", deleteNoteToRecents);
userRouter.put("/remove-note", removeNote);
userRouter.put("/edit-note", updateNote);
userRouter.put("/delete-folder", deleteFolder);
userRouter.put("/recover-note", recoverNote);
userRouter.put("/completely-delete", completelyDeleteNote);
userRouter.put("/pin-note", pinNote);
userRouter.put("/unpin-note", unPinNote);
userRouter.put("/lock-note", lockNote);
userRouter.put("/unlock-note", unLock);
userRouter.put("/change-pin", changePin);

export default userRouter;
