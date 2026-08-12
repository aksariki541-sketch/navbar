import { model, models, Schema } from "mongoose";



const noteSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    note: {
        type: String,
        require: true
    }
})

const Note = models.Note || model("Note", noteSchema)

export default Note;