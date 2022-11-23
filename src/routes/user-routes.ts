import express from "express";
import {
  addFolder,
  addNote,
  addUser,
  completelyDeleteNote,
  deleteFolder,
  deleteNoteToRecents,
  getUser,
  pinNote,
  recoverNote,
  removeNote,
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

export default userRouter;
