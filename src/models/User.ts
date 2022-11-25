import mongoose from "mongoose";

//SCHEMA FOR USER

const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
  password: {
    type: String,
  },
  notes: [
    {
      folder: String,
      noteText: String,
      noteTitle: String,
      date: String,
      pinned: Boolean,
      timestamp: String,
      locked: Boolean,
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
      locked: Boolean,
    },
  ],
  folderNames: [
    {
      folderName: String,
    },
  ],
});

export default mongoose.model("User", UserSchema);
