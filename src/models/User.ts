import mongoose from "mongoose";

//SCHEMA

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

export default mongoose.model("User", UserSchema);
