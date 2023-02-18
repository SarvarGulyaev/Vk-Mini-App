import * as mongoose from 'mongoose';

export const UserModel = new mongoose.Schema({
    _id: {
        type: Number,
        index: true,
        unique: true,
        required: true
    },
    level: {
        type: Number,
        required: true,
        default: 0,
    },
    history: {
        type: [],
        required: true,
        default: [],
    },
    // quizID: {
    //     type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }],
    //     default: [],
    //     required: true
    // },
})

export interface User extends mongoose.Document {
    _id: number;
    level: number;
    history: any[];

    // quizID: string | number;
}