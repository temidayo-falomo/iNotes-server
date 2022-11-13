import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    _id: string;
    fullName: string;
    userAvatar: string;
    notes: {
        date?: string | undefined;
        timestamp?: string | undefined;
        pinned?: boolean | undefined;
        folder?: string | undefined;
        noteText?: string | undefined;
        noteTitle?: string | undefined;
    }[];
    deleted: {
        date?: string | undefined;
        timestamp?: string | undefined;
        pinned?: boolean | undefined;
        folder?: string | undefined;
        noteText?: string | undefined;
        noteTitle?: string | undefined;
    }[];
    folderNames: {
        folderName?: string | undefined;
    }[];
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    _id: string;
    fullName: string;
    userAvatar: string;
    notes: {
        date?: string | undefined;
        timestamp?: string | undefined;
        pinned?: boolean | undefined;
        folder?: string | undefined;
        noteText?: string | undefined;
        noteTitle?: string | undefined;
    }[];
    deleted: {
        date?: string | undefined;
        timestamp?: string | undefined;
        pinned?: boolean | undefined;
        folder?: string | undefined;
        noteText?: string | undefined;
        noteTitle?: string | undefined;
    }[];
    folderNames: {
        folderName?: string | undefined;
    }[];
}>>;
export default _default;
