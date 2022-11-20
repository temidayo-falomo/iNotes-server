import User from "../models/User";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req: any, res: any, next: any) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    return console.log(error);
  }

  if (!users) {
    return res.status(404).json({ message: "Users Not Found!" });
  }

  return res.status(200).json({ users });
};

export const addUser = async (req: any, res: any, next: any) => {
  let existingUser;

  try {
    existingUser = await User.findById(req.body.userId);
  } catch (error) {
    return console.log(error);
  }

  if (existingUser) {
    return res.status(404).json({ message: "Already Logged In!" });
  }

  const user = new User({
    fullName: req.body.fullName,
    userAvatar: req.body.userAvatar,
    _id: req.body.userId,
    notes: req.body.notes,
    folderNames: req.body.folderNames,
  });

  try {
    user.save();
  } catch (error) {
    return console.log(error);
  }

  return res.status(200).json({ message: "Successfuully Created Profile" });
};

export const getUser = async (req: any, res: any, next: any) => {
  const userId = req.params.id;

  let user;

  try {
    user = await User.findById(userId, "-_id");
  } catch (error) {
    return res.status(404).json({ message: "Something went wrong." });
  }

  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  }

  return res.status(200).json({ user });
};

export const addNote = async (req: any, res: any) => {
  let note;
  let currentUser = req.body.userId;

  const hashedNoteText = bcrypt.hashSync(req.body.noteText);

  const noteToBeAdded = {
    folder: req.body.folderName,
    noteText: req.body.noteText,
    noteTitle: req.body.noteTitle,
    date: req.body.date,
    pinned: req.body.pinnedState,
    timestamp: req.body.timestamp,
  };

  //!TODO: Add Initial Filter To Frontend for only where pinned is true (With Unique Sets)
  //!TODO: Filter Against Pinned.

  try {
    note = await User.findByIdAndUpdate(currentUser, {
      $push: { notes: noteToBeAdded },
    });
  } catch (error) {
    console.log(error);
  }

  if (!note) {
    return res.status(404).json({ message: "Note Not Found" });
  }

  return res.status(200).json({ message: "Added Note!" });
};

export const addFolder = async (req: any, res: any) => {
  let folder;
  let folderExists;
  let currentUser = req.body.userId;

  //!TODO: Check if folder exists in the Frontend

  const folderTobeAdded = {
    folderName: req.body.currentFoldername,
  };

  try {
    folder = await User.findByIdAndUpdate(currentUser, {
      $push: { folderNames: folderTobeAdded },
    });
  } catch (error) {
    console.log(error);
  }

  if (!folder) {
    return res.status(404).json({ message: "Unable to add Folder" });
  }

  return res.status(200).json({ message: "Added Folder!" });
};

//TAKE NOTE TO REC DELETED
export const deleteNoteToRecents = async (req: any, res: any) => {
  let note;
  let currentUser = req.body.userId;

  const noteToBeAdded = {
    folder: req.body.folderName,
    noteText: req.body.noteText,
    noteTitle: req.body.noteTitle,
    date: req.body.date,
    pinned: req.body.pinnedState,
    timestamp: req.body.timestamp,
    _id: req.body.currentNoteId,
  };

  try {
    note = await User.findByIdAndUpdate(currentUser, {
      $push: { deleted: noteToBeAdded },
    });
  } catch (error) {
    console.log(error);
  }

  if (!note) {
    return res.status(404).json({ message: "Unable to delete note" });
  }

  return res.status(200).json({ message: "Suuccesfully Deleted Note!" });
};
//TO REMOVE NOTE IMMEDIATELY AFTER BEING DELETED
export const removeNote = async (req: any, res: any) => {
  let note;
  let currentUser = req.body.userId;

  try {
    note = await User.findByIdAndUpdate(currentUser, {
      $pull: { notes: { _id: req.body.currentNoteId } },
    });
  } catch (error) {
    console.log(error);
  }

  if (!note) {
    return res.status(404).json({ message: "Unable to Remove note" });
  }

  return res.status(200).json({ message: "Suuccesfully Removed Note!" });
};

//UPDATE NOTE WITH NEW TEXT & TITLE
export const updateNote = async (req: any, res: any) => {
  let note;
  let result;
  let currentUser = req.body.userId;
  let index = req.body.index;

  try {
    note = await User.updateOne(
      { _id: currentUser },
      {
        $set: {
          [`notes.${index}.noteText`]: req.body.editedNote,
          [`notes.${index}.noteTitle`]: req.body.noteTitle,
          [`notes.${index}.timestamp`]: req.body.timestamp,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }

  if (!note) {
    return res.status(404).json({ message: "Unable to Update note" });
  }

  return res.status(200).json({ message: "Suuccesfully Updated Note!" });
};

export const deleteFolder = async (req: any, res: any) => {
  let note;
  let currentUser = req.body.userId;

  try {
    note = await User.findByIdAndUpdate(currentUser, {
      $pull: { folderNames: { folderName: req.body.folderName } },
    });
  } catch (error) {
    console.log(error);
  }

  if (!note) {
    return res.status(404).json({ message: "Unable to Remove Folder" });
  }

  return res.status(200).json({ message: "Suuccesfully Removed Folder!" });
};

//TO RECOVER NOTE

export const recoverNote = async (req: any, res: any) => {
  let note;
  let currentUser = req.body.userId;

  const noteToBeAdded = {
    folder: req.body.folderName,
    noteText: req.body.noteText,
    noteTitle: req.body.noteTitle,
    date: req.body.date,
    pinned: req.body.pinnedState,
    timestamp: req.body.timestamp,
    _id: req.body.currentNoteId,
  };

  try {
    note = await User.findByIdAndUpdate(currentUser, {
      $push: { notes: noteToBeAdded },
    });
  } catch (error) {
    console.log(error);
  }

  if (!note) {
    return res.status(404).json({ message: "Unable to recover note" });
  }

  return res.status(200).json({ message: "Suuccesfully Recovered Note!" });
};

export const completelyDeleteNote = async (req: any, res: any) => {
  let note;
  let currentUser = req.body.userId;

  try {
    note = await User.findByIdAndUpdate(currentUser, {
      $pull: { deleted: { _id: req.body.currentNoteId } },
    });
  } catch (error) {
    console.log(error);
  }

  if (!note) {
    return res
      .status(404)
      .json({ message: "Unable to Completely Remove note" });
  }

  return res
    .status(200)
    .json({ message: "Suuccesfully Removed Note Completely!" });
};

export const pinOrUnpinNote = async (req: any, res: any) => {
  let note;
  let currentUser = req.body.userId;
  let index = req.body.index;

  try {
    note = await User.updateOne(
      { _id: currentUser },
      {
        $set: {
          [`notes.${index}.pinned`]: req.body.pinnedState,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }

  if (!note) {
    return res.status(404).json({ message: "Unable to Pin note" });
  }

  return res.status(200).json({ message: "Succesfully Pinned Note!" });
};
